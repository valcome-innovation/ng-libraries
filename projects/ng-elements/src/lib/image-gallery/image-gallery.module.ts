import { NgModule } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery.component';
import { CommonModule } from '@angular/common';
import { UniversalModule } from '@valcome/ng-core';

@NgModule({
  imports: [
    CommonModule,
    UniversalModule
  ],
  declarations: [ImageGalleryComponent],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {
}
