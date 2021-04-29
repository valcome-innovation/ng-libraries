import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';
import { DisplayValue } from '@valcome/ng-core';

@Component({
  selector: 'val-generic-radio',
  templateUrl: './generic-radio.component.html',
  styleUrls: ['../base-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericRadioComponent extends BaseGenericFieldComponent {
  @Input()
  public options: DisplayValue<any>[] = [];
}
