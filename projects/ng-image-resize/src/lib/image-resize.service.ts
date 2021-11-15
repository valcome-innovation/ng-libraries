import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ImageMaxSizeService } from './image-max-size.service';
import { ImageExifService } from './image-exif.service';
import { ImageMaxPXSizeService } from './image-max-px-size.service';

@Injectable()
export class ImageResizeService {

  public constructor(private imgMaxSizeService: ImageMaxSizeService,
                     private imgMaxPXSizeService: ImageMaxPXSizeService,
                     private imageExifService: ImageExifService) {
  }

  public compress(files: File[], maxSizeInMB: number, ignoreAlpha: boolean = false, logExecutionTime: boolean = false): Observable<any> {
    let compressedFileSubject: Subject<any> = new Subject<any>();
    files.forEach((file) => {
      this.compressImage(file, maxSizeInMB, ignoreAlpha, logExecutionTime).subscribe((value) => {
        compressedFileSubject.next(value);
      }, error => {
        compressedFileSubject.error(error);
      });
    });
    return compressedFileSubject.asObservable();
  }

  public resize(files: File[], maxWidth: number, maxHeight: number, logExecutionTime: boolean = false): Observable<any> {
    let resizedFileSubject: Subject<any> = new Subject<any>();
    files.forEach((file) => {
      this.resizeImage(file, maxWidth, maxHeight, logExecutionTime).subscribe((value) => {
        resizedFileSubject.next(value);
      }, error => {
        resizedFileSubject.error(error);
      });
    });
    return resizedFileSubject.asObservable();
  }

  public compressImage(file: File, maxSizeInMB: number, ignoreAlpha: boolean = false, logExecutionTime: boolean = false): Observable<any> {
    return this.imgMaxSizeService.compressImage(file, maxSizeInMB, ignoreAlpha, logExecutionTime);
  }

  public resizeImage(file: File, maxWidth: number, maxHeight: number, logExecutionTime: boolean = false): Observable<any> {
    return this.imgMaxPXSizeService.resizeImage(file, maxWidth, maxHeight, logExecutionTime);
  }

  public getEXIFOrientedImage(image: HTMLImageElement): Promise<HTMLImageElement> {
    return this.imageExifService.getOrientedImage(image);
  }
}
