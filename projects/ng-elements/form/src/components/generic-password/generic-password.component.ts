import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-password',
  templateUrl: './generic-password.component.html',
  styleUrls: ['../base-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericPasswordComponent extends BaseGenericFieldComponent {

  public type: 'password' | 'text' = 'password';

  @Input()
  public label!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public showCapsAlert = true;

  @Input()
  public autocomplete!: string;

  @Input()
  public displayVisibilityToggle = true;

  @Input()
  public showLabel = 'Show';

  @Input()
  public hideLabel = 'Hide';

  @Input()
  public capslockLabel = 'CAPSLOCK is active'

  public isCapslockActive = false;

  @HostListener('window:keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent): void {
    if (this.isCapslockActive && event.key === 'CapsLock') {
      this.isCapslockActive = false;
    } else if (typeof event.getModifierState === "function") {
      this.isCapslockActive = event.getModifierState('CapsLock');
    } else {
      this.isCapslockActive = false;
    }
  }

  public toggleVisibility() {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
