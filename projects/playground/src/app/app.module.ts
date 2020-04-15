import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreAnimationsModule } from '../../../../dist/@valcome/ng-animations';
import { ModalModule } from '../../../../dist/@valcome/ng-elements';
import { DynamicModalService } from '../../../ng-elements/src/lib/modals/services/dynamic-modal.service';

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
