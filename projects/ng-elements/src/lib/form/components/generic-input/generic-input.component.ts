import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['../base-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericInputComponent extends BaseGenericFieldComponent {

  @Input()
  public type = 'text';

  @Input()
  public label!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public autocomplete!: string;
}
