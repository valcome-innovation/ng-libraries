import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDynamicModalComponent } from '../base-dynamic-modal.component';
import { AnimationEasing, fade, scale } from 'ng-animations';

@Component({
  selector: 'val-modal-frame',
  templateUrl: './modal-frame.component.html',
  styleUrls: ['./modal-frame.component.scss'],
  animations: [
    fade({ inTime: 125, outTime: 0, easing: AnimationEasing.EASE_OUT_QUINT }),
    scale({ inTime: 125, outTime: 0, easing: AnimationEasing.EASE_OUT_QUINT })
  ],
  encapsulation: ViewEncapsulation.None
})
export class ModalFrameComponent extends BaseDynamicModalComponent {
}
