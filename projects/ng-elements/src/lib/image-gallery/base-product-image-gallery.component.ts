import { BaseComponent } from '@valcome/ng-core';
import { AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import Drift from 'drift-zoom';
import { Image } from '../form/model/image';

export class BaseProductImageGalleryComponent extends BaseComponent implements OnChanges, AfterViewInit {

  @Input()
  public zoomLevel: number = 3;

  @Input()
  public touchDelay: number = 0;

  @Input()
  public images: Image[];

  public activeImage: Image;
  public isFirst: boolean;
  public isLast: boolean;

  public isZooming: boolean = false;

  public ngAfterViewInit() {
    this.initializeZooming();
  }

  private initializeZooming(): Drift {
    return new Drift(document.querySelector('div.image-gallery > div.active-image-container > img.active-image'), {
      paneContainer: document.querySelector('.zoom-panel'),
      zoomFactor: this.zoomLevel,
      touchDelay: this.touchDelay,
      onShow: () => this.startZooming(),
      onHide: () => this.endZooming()
    });
  }

  public startZooming() {
    this.isZooming = true;
  }

  public endZooming() {
    this.isZooming = false;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.activeImage == null) {
      this.setFirstImageAsActive();
    }
  }

  private setFirstImageAsActive(): void {
    if (this.hasImages()) {
      this.selectImage(this.images[0]);
    }
  }

  private hasImages(): boolean {
    return this.images?.length > 0;
  }

  public selectImage(image: Image): void {
    this.activeImage = image;
    this.isFirst = this.isImageFirstInList(image);
    this.isLast = this.isImageLastInList(image);
  }

  private isImageFirstInList(image: Image): boolean {
    return this.hasImages() && this.images[0].sortOrder === image?.sortOrder;
  }

  private isImageLastInList(image: Image): boolean {
    let lastIndex: number = this.images?.length - 1;
    return this.hasImages() && this.images[lastIndex].sortOrder === image?.sortOrder;
  }

  public nextImage(): void {
    if (!this.isLast) {
      let activeIndex: number = this.getActiveImageIndex();
      let nextImage: Image = this.images[activeIndex + 1];
      this.selectImage(nextImage);
    }
  }

  public previousImage(): void {
    if (!this.isFirst) {
      let activeIndex: number = this.getActiveImageIndex();
      let prevImage: Image = this.images[activeIndex - 1];
      this.selectImage(prevImage);
    }
  }

  private getActiveImageIndex(): number {
    return this.images.findIndex(i => i.sortOrder === this.activeImage.sortOrder);
  }
}
