import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'val-switch-control',
  templateUrl: './switch-control.component.html',
  styleUrls: ['./switch-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchControlComponent {

  @Input()
  public isLoading = false;

  @Input()
  public condition!: boolean;

  @Output()
  public conditionChange = new EventEmitter<boolean>();

  public toggleSwitch(): void {
    if (!this.isLoading) {
      this.condition = !this.condition;
      this.conditionChange.emit(this.condition);
    }
  }
}
