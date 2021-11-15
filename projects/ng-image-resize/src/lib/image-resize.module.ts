import { NgModule } from "@angular/core";
import { ImageResizeService } from "./image-resize.service";
import { ImageMaxSizeService } from "./image-max-size.service";
import { ImageExifService } from "./image-exif.service";
import { ImageMaxPXSizeService } from './image-max-px-size.service';
import { NgPicaService } from './ng-pica.service';

@NgModule({
  providers: [
    ImageMaxPXSizeService,
    ImageMaxSizeService,
    ImageExifService,
    ImageResizeService,
    NgPicaService
  ]
})
export class ImageResizeModule {
}
