import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDynamicModalComponent } from '../base-dynamic-modal.component';
import { AnimationEasing, fade } from '@valcome/ng-animations';

@Component({
  selector: 'val-modal-frame',
  templateUrl: './modal-frame.component.html',
  styleUrls: ['./modal-frame.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fade({ inTime: 125, outTime: 0, easing: AnimationEasing.EASE_OUT_QUINT })]
})
export class ModalFrameComponent extends BaseDynamicModalComponent {
}
