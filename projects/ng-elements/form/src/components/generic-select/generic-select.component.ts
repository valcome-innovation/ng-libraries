import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DisplayValue } from '@valcome/ng-core';
import { JsUtils } from '@valcome/ts-core';
import { BaseGenericFieldComponent } from '../base-generic-field.component';

@Component({
  selector: 'val-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['../base-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericSelectComponent extends BaseGenericFieldComponent {

  private _options: DisplayValue<any>[] = [];

  @Input()
  public set options(options: DisplayValue<any>[]) {
    this._options = options;

    // fixes value reset after displays have changed
    JsUtils.callAfterStackResolved(() => this.formControl.setValue(this.formControl.value, {
      onlySelf: true,
      emitEvent: false
    }));
  }

  public get options(): DisplayValue<any>[] {
    return this._options;
  }

  @Input()
  public label!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public displayCustomCaret = false;
}
