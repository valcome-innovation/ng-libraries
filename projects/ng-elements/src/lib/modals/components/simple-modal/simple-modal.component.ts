import { Component, Input } from '@angular/core';
import { BaseDynamicModalComponent } from '../base-dynamic-modal.component';

@Component({
  selector: 'lib-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
})
export class SimpleModalComponent extends BaseDynamicModalComponent {

  @Input()
  public title: string = 'Title';

  @Input()
  public text: string = 'Place for content';

  @Input()
  public close: string = 'Close';
}
