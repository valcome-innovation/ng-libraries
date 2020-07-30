import { NgModule } from '@angular/core';
import { ModalFrameComponent } from './components/modal-frame/modal-frame.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';

@NgModule({
  declarations: [
    ModalFrameComponent,
    SimpleModalComponent
  ],
  imports: [],
  exports: [
    ModalFrameComponent
  ]
})
export class ModalModule {
}
