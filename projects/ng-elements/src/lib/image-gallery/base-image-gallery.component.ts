import { BaseComponent, RenderService } from '@valcome/ng-core';
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Image } from '../form/model/image';

@Directive()
export class BaseImageGalleryComponent extends BaseComponent implements OnChanges {

  @Input()
  public zoomLevel = 3;

  @Input()
  public touchDelay = 0;

  @Input('images')
  set setImages(images: Image[] | undefined) {
    if (images) {
      this.images = images;
    } else {
      this.images = [];
    }
  }

  public images: Image[] = [];

  @Input()
  public isLoading = true;

  public activeImage: Image;
  public isFirst: boolean;
  public isLast: boolean;

  public isZooming = false;
  public isInitialized = false;

  public internalId: string = StringUtils.getUniqueString();

  public constructor(private renderService: RenderService) {
    super();
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
    let isLoading = changes?.isLoading;

    if (!this.isInitialized && isLoading && !isLoading.currentValue) {
      this.initializeZooming();
    }

    if (this.activeImage == null) {
      this.setFirstImageAsActive();
    }
  }

  private setFirstImageAsActive(): void {
    if (this.images && this.hasImages()) {
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
