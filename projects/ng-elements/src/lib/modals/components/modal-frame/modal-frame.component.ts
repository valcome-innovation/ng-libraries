import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDynamicModalComponent } from '../base-dynamic-modal.component';

@Component({
  selector: 'val-modal-frame',
  templateUrl: './modal-frame.component.html',
  styleUrls: ['./modal-frame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalFrameComponent extends BaseDynamicModalComponent {
}
