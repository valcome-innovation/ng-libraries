import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RenderService } from '@valcome/ng-core';
import { filter, skip } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollTopService {

  public constructor(private renderService: RenderService,
                     private router: Router) {
  }

  public enableScrollToTop(skipInitialNavigation: boolean = false): void {
    if (this.renderService.isBrowser()) {
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          skip(skipInitialNavigation ? 1 : 0)
        ).subscribe(() => window.scroll(0, 0));
    }
  }
}
