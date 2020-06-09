import { NgModule } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageGalleryComponent],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {
}
