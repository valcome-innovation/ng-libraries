import { Directive, HostListener } from '@angular/core';
import { BaseBehaviorComponent } from '@valcome/ng-core';

@Directive()
export class BaseUnsavedChangesComponent extends BaseBehaviorComponent {

  protected unsavedChangesExist: boolean;

  public constructor(unsavedChangesExist: boolean) {
    super();
    this.unsavedChangesExist = unsavedChangesExist;
  }

  @HostListener('window:beforeunload', ['$event'])
  public unloadNotification() {
    return !this.doUnsavedChangesExist();
  }

  public doUnsavedChangesExist(): boolean {
    return this.unsavedChangesExist;
  }
}
