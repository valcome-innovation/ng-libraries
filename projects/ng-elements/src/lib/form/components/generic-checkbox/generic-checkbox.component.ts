import { Component, Input } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-checkbox',
  templateUrl: './generic-checkbox.component.html'
})
export class GenericCheckboxComponent extends BaseGenericFieldComponent {

  @Input()
  public label: string;

}
