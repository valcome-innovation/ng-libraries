import { Component, ViewEncapsulation } from '@angular/core';
import { RenderService } from '@valcome/ng-core';
import { BaseImageGalleryComponent } from './base-image-gallery.component';

@Component({
  selector: 'val-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent extends BaseImageGalleryComponent {
  public constructor(renderService: RenderService) {
    super(renderService);
  }
}
