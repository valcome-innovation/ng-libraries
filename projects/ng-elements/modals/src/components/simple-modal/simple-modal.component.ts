import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BaseDynamicModalComponent } from '../base-dynamic-modal.component';

@Component({
  selector: 'val-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleModalComponent extends BaseDynamicModalComponent {

  @Input()
  public title = 'Title';

  @Input()
  public text = 'Place for content';

  @Input()
  public close = 'Close';
}
