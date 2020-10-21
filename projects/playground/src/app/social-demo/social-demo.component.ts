import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@valcome/ng-social-login';

@Component({
  selector: 'val-social-demo',
  templateUrl: './social-demo.component.html',
  styleUrls: ['./social-demo.component.css']
})
export class SocialDemoComponent implements OnInit {

  public user?: SocialUser;

  public constructor(private authService: SocialAuthService) {
  }

  public ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
