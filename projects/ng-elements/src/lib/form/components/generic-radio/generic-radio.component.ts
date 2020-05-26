import { Component, Input } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';
import { DisplayValue } from '@valcome/ng-core';

@Component({
  selector: 'val-generic-radio',
  templateUrl: './generic-radio.component.html'
})
export class GenericRadioComponent extends BaseGenericFieldComponent {

  @Input()
  public options: DisplayValue[] = [];

}
