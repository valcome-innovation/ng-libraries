import { Component, Input } from '@angular/core';

@Component({
  selector: 'val-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  @Input()
  public show = true;

  @Input()
  public size = 24;

  @Input()
  public dark = false;
}
