import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DisplayValue } from '@valcome/ng-core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['../base-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericSelectComponent extends BaseGenericFieldComponent {

  @Input()
  public options: DisplayValue[] = [];

  @Input()
  public label!: string;

  @Input()
  public placeholder!: string;

}
