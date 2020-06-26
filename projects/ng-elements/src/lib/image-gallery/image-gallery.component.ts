import { Component, ViewEncapsulation } from '@angular/core';
import { BaseProductImageGalleryComponent } from './base-product-image-gallery.component';
import { RenderService } from '@valcome/ng-core';

@Component({
  selector: 'val-product-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent extends BaseProductImageGalleryComponent {
  public constructor(renderService: RenderService) {
    super(renderService);
  }
}
