import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toggleBackground } from './toggle.animation';
import { DisplayValue } from '@valcome/ng-core';

@Component({
  selector: 'val-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  animations: [toggleBackground]
})
export class ToggleButtonComponent implements OnInit {

  @Input()
  public isDisabled = false

  @Input()
  public values!: readonly [DisplayValue<any>, DisplayValue<any>];

  @Input('value')
  public set setValue(value: any) {
    this.value = value;
  }

  public value!: any;

  @Output()
  public valueChange = new EventEmitter<any>();

  public activeIndex = 0;

  public ngOnInit(): void {
    this.initDefaultValues();
  }

  private initDefaultValues(): void {
    if (this.value) {
      this.activeIndex = this.values.findIndex(v => v.value === this.value) || 0;
    } else {
      this.activeIndex = 0;
      this.value = this.values[0].value;
    }
  }

  public toggleValue(): void {
    this.activeIndex = Math.abs(this.activeIndex - 1); // toggle 0 or 1
    this.selectValue(this.activeIndex);
  }

  public selectValue(index: number): void {
    this.value = this.values[index].value;
    this.valueChange.emit(this.value);
  }
}
