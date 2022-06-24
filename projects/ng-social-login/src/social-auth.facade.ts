import { Inject, Injectable, NgZone } from '@angular/core';
import { BaseInitializableService, RenderService } from '@valcome/ng-core';
import { AsyncSubject, BehaviorSubject, isObservable, Observable, ReplaySubject } from 'rxjs';
import { LoginProvider, SignInOptions } from './types/login-provider';
import { SocialProvider, SocialUser } from './types/social-user';
import { DeviceCodeResponse, PolledUser } from './types/social';
import { GoogleLoginProvider } from './providers/google-login-provider';

export interface SocialAuthServiceConfig {
  autoLogin?: boolean;
  providers: { id: SocialProvider; provider: LoginProvider }[];

  onError?(error: any): void;
}

/** @dynamic */
@Injectable()
export class SocialAuthFacade extends BaseInitializableService {

  private static readonly ERR_NOT_LOGGED_IN = 'Not logged in';
  private static readonly ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
  private static readonly ERR_NOT_INITIALIZED = 'Login providers not ready yet. Are there errors on your console?';
  private static readonly ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN = 'Chosen login provider is not supported for getting an access token';

  public googleError$ = new BehaviorSubject<boolean>(false);
  public facebookError$ = new BehaviorSubject<boolean>(false);

  private providers: Map<SocialProvider, LoginProvider> = new Map();
  private autoLogin = false;

  private _user?: SocialUser;
  private _authState: ReplaySubject<SocialUser> = new ReplaySubject(1);

  private initialized = false;
  private _initState: AsyncSubject<boolean> = new AsyncSubject();

  public get authState(): Observable<SocialUser> {
    return this._authState.asObservable();
  }

  public get initState(): Observable<boolean> {
    return this._initState.asObservable();
  }

  public constructor(@Inject('SocialAuthServiceConfig') config: SocialAuthServiceConfig | Promise<SocialAuthServiceConfig>,
                     private renderService: RenderService,
                     private readonly _ngZone: NgZone) {
    super();

    if (this.renderService.isBrowser()) {
      if (config instanceof Promise) {
        config.then((config) => this.initialize(config));
      } else {
        this.initialize(config);
      }
    }
  }

  private async initialize(config: SocialAuthServiceConfig): Promise<void> {
    this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
    config.providers.forEach(item => this.providers.set(item.id, item.provider));

    try {
      await Promise.all(Array.from(this.providers.keys())
        .map(key => this.providers.get(key)!.initialize().catch(reason => {
          console.error(reason);
          if (key === 'GOOGLE') {
            this.googleError$.next(true);
          } else if (key === 'FACEBOOK') {
            this.facebookError$.next(true);
          }
        })));

      // listen to googles user change
      this.providers.forEach((provider, key) => {
        if (isObservable(provider.changeUser)) {
          provider.changeUser.subscribe((user) => {
            if (user !== null) {
              user.provider = key;
            }
            this._user = user ?? undefined;
            this._ngZone.run(() => {
              this._authState.next(user ?? undefined);
            });
          });
        }
      });

      this.initialized = true;
      this._initState.next(this.initialized);
      this._initState.complete();

      if (this.autoLogin) {
        return this.handleAutoLogin(this.providers);
      }
    } catch (error) {
      console.error(error);
      if (config.onError) {
        config.onError(error);
      }
    }

    super.markAsInitialized();
  }

  public getDeviceCode(providerId: SocialProvider): Promise<DeviceCodeResponse> {
    const loginProvider = this.getProvider(providerId);
    return loginProvider.getDeviceCode();
  }

  public async pollForDevice(providerId: SocialProvider, deviceCodeResponse: DeviceCodeResponse): Promise<PolledUser> {
    const loginProvider = this.getProvider(providerId);
    const polledUser = await loginProvider.singlePollForDevice(deviceCodeResponse);

    if (polledUser.type === 'user') {
      this.setUser(polledUser.user);
    }

    return polledUser;
  }

  public async getAccessToken(providerId: SocialProvider): Promise<string | null> {
    const providerObject = this.providers.get(providerId);

    if (!this.initialized) {
      throw SocialAuthFacade.ERR_NOT_INITIALIZED;
    } else if (!providerObject) {
      throw SocialAuthFacade.ERR_LOGIN_PROVIDER_NOT_FOUND;
    } else if (!(providerObject instanceof GoogleLoginProvider)) {
      throw SocialAuthFacade.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN;
    }

    return providerObject.getAccessToken();
  }

  public async signIn(providerId: SocialProvider, signInOptions?: SignInOptions): Promise<SocialUser> {
    await super.waitUntilInitialized();

    const loginProvider = this.getProvider(providerId);
    return this.signInFromProvider(loginProvider, providerId, signInOptions);
  }

  public async signOut(revoke: boolean = false): Promise<void> {
    await super.markAsInitialized();

    if (this._user) {
      const providerId = this._user.provider;
      const loginProvider = this.getProvider(providerId);
      return this.signOutFromProvider(loginProvider, revoke);
    }
  }

  private getProvider(providerId: SocialProvider): LoginProvider {
    let loginProvider = this.providers.get(providerId);

    if (loginProvider) {
      return loginProvider;
    } else {
      throw new Error(SocialAuthFacade.ERR_LOGIN_PROVIDER_NOT_FOUND);
    }
  }

  private async handleAutoLogin(providers: Map<SocialProvider, LoginProvider>): Promise<void> {
    const loginStatusPromises: Promise<SocialUser>[] = [];
    let loggedIn = false;

    providers.forEach((provider: LoginProvider, key: SocialProvider) => {
      let promise = provider.getLoginStatus();
      loginStatusPromises.push(promise);

      promise.then((user: SocialUser) => {
          user.provider = key;
          this.setUser(user);
          loggedIn = true;
        }
      ).catch(console.debug);
    });

    await Promise.all(loginStatusPromises).catch(() => {
      if (!loggedIn) {
        this.setUser(undefined)
      }
    });
  }

  private signInFromProvider(loginProvider: LoginProvider,
                             providerId: SocialProvider,
                             signInOptions?: SignInOptions): Promise<SocialUser> {
    if (loginProvider.signIn) {
      return loginProvider
        .signIn(signInOptions)
        .then((user: SocialUser) => {
          user.provider = providerId;
          this.setUser(user);

          return user;
        });
    } else {
      throw new Error('Cannot directly sign in with this provider.');
    }
  }

  private signOutFromProvider(loginProvider: LoginProvider, revoke: boolean): Promise<void> {
    return loginProvider
      .signOut(revoke)
      .then(() => this.setUser(undefined));
  }

  private setUser(socialUser: SocialUser | undefined): void {
    this._user = socialUser;
    this._authState.next(socialUser);
  }
}
