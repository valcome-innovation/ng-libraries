import { NgModule } from '@angular/core';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SkeletonLineComponent } from './skeleton-loader/skeleton-line/skeleton-line.component';
import { CommonModule } from '@angular/common';
import { SkeletonSquareComponent } from './skeleton-loader/skeleton-square/skeleton-square.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SkeletonLoaderComponent,
    SkeletonLineComponent,
    SkeletonSquareComponent
  ],
  exports: [
    SkeletonLoaderComponent,
    SkeletonLineComponent,
    SkeletonSquareComponent
  ]
})
export class SkeletonModule {
}
