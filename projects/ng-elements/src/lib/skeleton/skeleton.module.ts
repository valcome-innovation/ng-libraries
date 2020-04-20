import { NgModule } from '@angular/core';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SkeletonLineComponent } from './skeleton-loader/skeleton-line/skeleton-line.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
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
