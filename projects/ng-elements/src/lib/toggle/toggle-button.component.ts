import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toggleBackground } from './toggle.animation';
import { DisplayValue } from 'ng-core';

@Component({
  selector: 'val-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  animations: [toggleBackground]
})
export class ToggleButtonComponent implements OnInit {

  @Input()
  public values!: [DisplayValue, DisplayValue];

  @Input()
  public value!: DisplayValue;

  @Output()
  public valueChange = new EventEmitter<DisplayValue>();

  public activeIndex = 0;

  public ngOnInit(): void {
    this.initDefaultValues();
  }

  private initDefaultValues(): void {
    if (this.value) {
      this.activeIndex = this.values.findIndex(v => v.value === this.value.value) || 0;
    } else {
      this.activeIndex = 0;
      this.value = this.values[0];
    }
  }

  public toggleValue(): void {
    this.activeIndex = Math.abs(this.activeIndex - 1); // toggle 0 or 1
    this.setValue(this.activeIndex);
  }

  public setValue(index: number): void {
    this.value = this.values[index];
    this.valueChange.emit(this.value);
  }
}
