import { BaseComponent, StringUtils } from '@valcome/ng-core';
import { AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Image } from '../form/model/image';
import { RenderService } from '../universal/render.service';

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

  public internalId: string = StringUtils.getUniqueString();

  public constructor(private renderService: RenderService) {
    super();
  }

  public ngAfterViewInit() {
    this.initializeZooming();
  }

  private initializeZooming(): any {
    if (this.renderService.isBrowser()) {
      import('drift-zoom').then(Drift => {
        return new Drift.default(document.getElementById(this.internalId), {
          paneContainer: document.querySelector('.zoom-panel'),
          inlinePane: 1,
          zoomFactor: this.zoomLevel,
          touchDelay: this.touchDelay,
          onShow: () => this.startZooming(),
          onHide: () => this.endZooming()
        });
      });
    }
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
    } else {
      this.setFirstImageAsActive();
    }
  }

  public previousImage(): void {
    if (!this.isFirst) {
      let activeIndex: number = this.getActiveImageIndex();
      let prevImage: Image = this.images[activeIndex - 1];
      this.selectImage(prevImage);
    } else {
      this.setLastImageAsActive();
    }
  }

  private setLastImageAsActive(): void {
    if (this.hasImages()) {
      this.selectImage(this.images[this.images.length - 1]);
    }
  }

  private getActiveImageIndex(): number {
    return this.images.findIndex(i => i.sortOrder === this.activeImage.sortOrder);
  }
}
