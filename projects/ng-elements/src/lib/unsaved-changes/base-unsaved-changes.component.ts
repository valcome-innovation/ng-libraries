import { HostListener } from '@angular/core';
import { BaseComponent } from 'ng-core';

export class BaseUnsavedChangesComponent extends BaseComponent {

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
