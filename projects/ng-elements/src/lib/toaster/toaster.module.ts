import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast/toast.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { ToasterService } from './shared/toaster.service';
import { DomService } from './shared/dom.service';

export { DomService } from './shared/dom.service';
export { ToasterService } from './shared/toaster.service';
export { ToastComponent } from './toast/toast.component';
export { ToastContainerComponent } from './toast-container/toast-container.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ToastComponent, ToastContainerComponent],
  exports: [],
  entryComponents: [ToastComponent, ToastContainerComponent],
  providers: [ToasterService, DomService]
})
export class ToasterModule {
}
