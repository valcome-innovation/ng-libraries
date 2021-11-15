import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ImageExifService } from './image-exif.service';
import { NgPicaService } from './ng-pica.service';

@Injectable()
export class ImageMaxPXSizeService {

  public timeAtStart?: number;

  public constructor(private ngPicaService: NgPicaService,
                     private imageExifService: ImageExifService) {
  }

  public resizeImage(file: File, maxWidth: number, maxHeight: number, logExecutionTime: boolean = false): Observable<File> {
    let resizedFileSubject = new Subject<File>();

    this.timeAtStart = new Date().getTime();
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      //END OF RESIZE
      setTimeout(() => {
        resizedFileSubject.error({
          resizedFile: file,
          reason: "The provided File is neither of type jpg nor of type png.",
          error: "INVALID_EXTENSION"
        });
      }, 0);
      return resizedFileSubject.asObservable();
    }
    let img = new Image();
    let self = this;
    img.onload = () => {
      this.imageExifService.getOrientedImage(img).then(orientedImg => {
        window.URL.revokeObjectURL(img.src);
        let currentWidth = orientedImg.width;
        let currentHeight = orientedImg.height;
        let newWidth = currentWidth;
        let newHeight = currentHeight;
        if (newWidth > maxWidth) {
          newWidth = maxWidth
          //resize height proportionally
          let ratio = maxWidth / currentWidth; //is gonna be <1
          newHeight = newHeight * ratio;
        }
        currentHeight = newHeight;
        if (newHeight > maxHeight) {
          newHeight = maxHeight;
          //resize width proportionally
          let ratio = maxHeight / currentHeight; //is gonna be <1
          newWidth = newWidth * ratio;
        }
        if (newHeight === orientedImg.height && newWidth === orientedImg.width) {
          //no resizing necessary
          resizedFileSubject.next(file);
          self.logExecutionTime(logExecutionTime);
        } else {
          self.ngPicaService.resize([file], newWidth, newHeight).subscribe((result) => {
            //all good, result is a file
            resizedFileSubject.next(result);
            self.logExecutionTime(logExecutionTime);
          }, error => {
            //something went wrong
            resizedFileSubject.error({ resizedFile: file, reason: error, error: "PICA_ERROR" });
            self.logExecutionTime(logExecutionTime);
          });
        }
      });
    };
    img.src = window.URL.createObjectURL(file);

    return resizedFileSubject.asObservable();
  };

  private logExecutionTime(logExecutionTime: boolean): void {
    if (logExecutionTime) {
      if (this.timeAtStart) {
        console.info("Execution time: ", new Date().getTime() - this.timeAtStart + "ms");
      } else {
        console.log('Couldn\'t log execution time.');
      }
    }
  }
}
