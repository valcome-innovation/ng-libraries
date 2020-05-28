import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-checkbox',
  templateUrl: './generic-checkbox.component.html',
  styleUrls: ['../base-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericCheckboxComponent extends BaseGenericFieldComponent {

  @Input()
  public label: string;

}
