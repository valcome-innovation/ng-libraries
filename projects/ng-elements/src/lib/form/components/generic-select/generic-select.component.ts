import { Component, Input } from '@angular/core';
import { DisplayValue } from '@valcome/ng-core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-select',
  templateUrl: './generic-select.component.html'
})
export class GenericSelectComponent extends BaseGenericFieldComponent {

  @Input()
  public options: DisplayValue[] = [];

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

}
