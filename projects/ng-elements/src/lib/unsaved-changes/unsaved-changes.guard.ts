import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UnsavedChangesModule } from './unsaved-changes.module';
import { BaseUnsavedChangesComponent } from './base-unsaved-changes.component';

@Injectable({ providedIn: UnsavedChangesModule })
export class UnsavedChangesGuard implements CanDeactivate<BaseUnsavedChangesComponent> {

  public canDeactivate(component: BaseUnsavedChangesComponent,
                       currentRoute: ActivatedRouteSnapshot,
                       currentState: RouterStateSnapshot,
                       nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.doUnsavedChangesExist()
      ? confirm('You have unsaved changes that may be lost. Do you really want to continue?')
      : true;
  }
}
