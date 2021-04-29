import { NgModule } from '@angular/core';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SkeletonLineComponent } from './skeleton-loader/skeleton-line/skeleton-line.component';
import { CommonModule } from '@angular/common';
import { SkeletonSquareComponent } from './skeleton-loader/skeleton-square/skeleton-square.component';
import { SkeletonRectComponent } from './skeleton-loader/skeleton-rect/skeleton-rect.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SkeletonLoaderComponent,
    SkeletonLineComponent,
    SkeletonSquareComponent,
    SkeletonRectComponent
  ],
  exports: [
    SkeletonLoaderComponent,
    SkeletonLineComponent,
    SkeletonSquareComponent,
    SkeletonRectComponent
  ]
})
export class SkeletonModule {
}
