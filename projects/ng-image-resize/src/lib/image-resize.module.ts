import { NgModule } from "@angular/core";
import { ImageResizeService } from "./image-resize.service";
import { ImageMaxSizeService } from "./image-max-size.service";
import { ImageExifService } from "./image-exif.service";
import { Ng2PicaModule } from "ng2-pica";
import { ImageMaxPXSizeService } from './image-max-px-size.service';

@NgModule({
  imports: [
    Ng2PicaModule
  ],
  providers: [
    ImageMaxPXSizeService,
    ImageMaxSizeService,
    ImageExifService,
    ImageResizeService
  ]
})
export class ImageResizeModule {
}
