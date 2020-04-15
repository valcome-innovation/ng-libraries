import { NgModule } from '@angular/core';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';

@NgModule({
  declarations: [
    BaseModalComponent,
    SimpleModalComponent
  ],
  imports: [],
  exports: []
})
export class ModalModule {
}

export * from './components/base-dynamic-modal.component';
