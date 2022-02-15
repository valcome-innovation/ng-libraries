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

  public visibilityLabel = 'Show';
  public isCapslockActive = false;
  public hasFocus = false;

  public ngOnInit() {
    super.ngOnInit();
  }

  @HostListener('window:keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent): void {
    if (this.isCapslockActive && event.key === 'CapsLock') {
      this.isCapslockActive = false;
    } else {
      this.isCapslockActive = event.getModifierState('CapsLock');
    }
  }

  public toggleVisibility() {
    if (this.type === 'password') {
      this.type = 'text';
      this.visibilityLabel = this.hideLabel;
    } else {
      this.type = 'password';
      this.visibilityLabel = this.showLabel;
    }
  }

  public setFocus(value: boolean) {
    this.hasFocus = value;
  }
}
