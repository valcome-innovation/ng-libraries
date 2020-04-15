import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicModalService } from '../../../ng-elements/src/lib/modals/services/dynamic-modal.service';
import { ModalModule } from '../../../ng-elements/src/lib/modals/modal.module';
import { CoreAnimationsModule } from 'ng-animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    AppRoutingModule,
    CoreAnimationsModule
  ],
  providers: [DynamicModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
