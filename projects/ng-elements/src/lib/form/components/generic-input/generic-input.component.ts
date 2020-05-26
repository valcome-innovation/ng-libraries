import { Component, Input } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-input',
  templateUrl: './generic-input.component.html'
})
export class GenericInputComponent extends BaseGenericFieldComponent {

  @Input()
  public type: string = 'text';

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

}
