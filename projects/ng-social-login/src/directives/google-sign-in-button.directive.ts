import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { SocialAuthFacade } from '@valcome/ng-social-login';

@Directive({
  selector: 'val-google-sign-in-button',
})
export class GoogleSignInButtonDirective implements OnInit {

  @Input()
  public width = '250px';

  public constructor(private el: ElementRef,
                     private socialAuthService: SocialAuthFacade) {
  }

  public ngOnInit(): void {
    this.socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(this.el.nativeElement, {
        width: this.width,
        type: 'standard',
        size: 'large',
        shape: 'rectangular',
        theme: 'outline'
      });
    })
  }
}
