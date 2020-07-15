import { NgModule } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery.component';
import { CommonModule } from '@angular/common';
import { UniversalModule } from '@valcome/ng-core';
import { SkeletonModule } from '../skeleton/skeleton.module';

@NgModule({
  imports: [
    CommonModule,
    UniversalModule,
    SkeletonModule
  ],
  declarations: [ImageGalleryComponent],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {
}
