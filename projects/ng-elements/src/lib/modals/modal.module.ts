import { NgModule } from '@angular/core';
import { BaseModalComponent } from './components/base-modal/base-modal.component';

@NgModule({
  declarations: [
    BaseModalComponent
  ],
  imports: [],
  exports: []
})
export class ModalModule {
}

export * from './services/dynamic-modal.service';
export * from './components/base-dynamic-modal.component';
