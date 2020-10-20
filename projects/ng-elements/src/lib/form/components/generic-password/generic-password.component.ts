import { Component, Input, ViewEncapsulation } from '@angular/core';
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
  public autocomplete!: string;

  public togglePassword() {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
