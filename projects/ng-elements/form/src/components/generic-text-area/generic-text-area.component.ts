import { Component, Input } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-text-area',
  templateUrl: './generic-text-area.component.html'
})
export class GenericTextAreaComponent extends BaseGenericFieldComponent {

  @Input()
  public rows = 3;

  @Input()
  public label!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public autocomplete!: string;
}
