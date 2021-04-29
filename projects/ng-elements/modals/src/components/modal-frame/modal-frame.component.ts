import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDynamicModalComponent } from '../base-dynamic-modal.component';
import { animate, style, transition, trigger } from '@angular/animations';

const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 } as any),
    animate(`200ms 0ms cubic-bezier(0.22, 1, 0.36, 1)`, style({ opacity: 1 } as any))
  ]),
  transition(':leave', [
    style({ opacity: 1 } as any),
    animate(`200ms 0ms cubic-bezier(0.22, 1, 0.36, 1)`, style({ opacity: 0 } as any))
  ])
]);

const scale = trigger('scale', [
  transition(':enter', [
    style({ transform: 'scale(0)' } as any),
    animate(`200ms 0ms cubic-bezier(0.22, 1, 0.36, 1)`, style({ transform: 'scale(1)' } as any))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)' } as any),
    animate(`200ms 0ms cubic-bezier(0.22, 1, 0.36, 1)`, style({ transform: 'scale(0)' } as any))
  ])
]);

@Component({
  selector: 'val-modal-frame',
  templateUrl: './modal-frame.component.html',
  styleUrls: ['./modal-frame.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fade, scale]
})
export class ModalFrameComponent extends BaseDynamicModalComponent {
}
