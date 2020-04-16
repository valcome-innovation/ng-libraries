import { NgModule } from '@angular/core';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SkeletonLineComponent } from './skeleton-loader/skeleton-line/skeleton-line.component';

@NgModule({
  declarations: [
    SkeletonLoaderComponent,
    SkeletonLineComponent
  ],
  exports: [
    SkeletonLoaderComponent,
    SkeletonLineComponent
  ]
})
export class SkeletonModule {
}
