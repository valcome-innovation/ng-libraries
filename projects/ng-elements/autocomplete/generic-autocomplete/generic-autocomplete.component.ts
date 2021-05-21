import { BaseGenericFieldComponent } from '../../form/src/components/base-generic-field.component';
import { Component, Input } from '@angular/core';
import { DisplayValue } from '@valcome/ng-core';

@Component({
  selector: 'val-generic-autocomplete',
  templateUrl: './generic-autocomplete.component.html'
})
export class GenericAutocompleteComponent extends BaseGenericFieldComponent {

  @Input()
  public label!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public options: DisplayValue<any>[] = [];
}
