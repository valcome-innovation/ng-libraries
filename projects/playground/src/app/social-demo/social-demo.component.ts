import { Component, OnInit } from '@angular/core';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  GoogleTvLoginProvider,
  SocialAuthService,
  SocialUser
} from '@valcome/ng-social-login';

@Component({
  selector: 'val-social-demo',
  templateUrl: './social-demo.component.html',
  styleUrls: ['./social-demo.component.css']
})
export class SocialDemoComponent implements OnInit {

  public user?: SocialUser;
  public areCookiesBlocked = false;

  public constructor(private authService: SocialAuthService) {
  }

  public ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });

    this.authService.hasCookieError$.subscribe(areCookiesBlocked => this.areCookiesBlocked = areCookiesBlocked);
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signInWithGoogleOnTv(): void {
    this.authService.signIn(GoogleTvLoginProvider.PROVIDER_ID);
  }

  public signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
