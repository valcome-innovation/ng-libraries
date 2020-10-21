import { Inject, Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { LoginProvider, SignInOptions } from './entities/login-provider';
import { SocialProvider, SocialUser } from './entities/social-user';
import { BaseInitializableService } from '@valcome/ng-core';

export interface SocialAuthServiceConfig {
  autoLogin?: boolean;
  providers: { id: SocialProvider; provider: LoginProvider }[];

  onError?(error: any): void;
}

/** @dynamic */
@Injectable()
export class SocialAuthService extends BaseInitializableService {
  private static readonly ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
  private static readonly ERR_NOT_LOGGED_IN = 'Not logged in';

  public hasCookieError$ = new BehaviorSubject<boolean>(false);

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

  public constructor(@Inject('SocialAuthServiceConfig') config: SocialAuthServiceConfig | Promise<SocialAuthServiceConfig>) {
    super();
    if (config instanceof Promise) {
      config.then((config) => this.initialize(config));
    } else {
      this.initialize(config);
    }
  }

  private async initialize(config: SocialAuthServiceConfig): Promise<void> {
    this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
    config.providers.forEach(item => this.providers.set(item.id, item.provider));

    try {
      await Promise.all(Array.from(this.providers.values())
        .map(provider => provider.initialize().catch(reason => {
          console.error(reason);
          if (reason.details.includes('Cookies are not enabled')) {
            this.hasCookieError$.next(true);
          }
        })));

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

  public async signIn(providerId: SocialProvider, signInOptions?: SignInOptions): Promise<SocialUser> {
    await super.waitUntilInitialized();

    let loginProvider = this.providers.get(providerId);

    if (loginProvider) {
      return this.signInFromProvider(loginProvider, providerId, signInOptions);
    } else {
      throw new Error(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
    }
  }

  public async signOut(revoke: boolean = false): Promise<void> {
    await super.markAsInitialized();

    if (!this._user) {
      throw new Error(SocialAuthService.ERR_NOT_LOGGED_IN);
    } else {
      let providerId = this._user.provider;
      let loginProvider = this.providers.get(providerId);

      if (loginProvider) {
        return this.signOutFromProvider(loginProvider, revoke);
      } else {
        throw new Error(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
      }
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
    return loginProvider
      .signIn(signInOptions)
      .then((user: SocialUser) => {
        user.provider = providerId;
        this.setUser(user);

        return user;
      });
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
