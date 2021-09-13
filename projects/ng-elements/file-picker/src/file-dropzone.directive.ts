import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FilePickerError } from './file-picker-error';

@Directive({
  selector: '[valFileDropzone]'
})
export class FileDropzoneDirective implements OnInit {

  @Input()
  public accept = '';

  @Input()
  public maxSize = 0;

  @Output()
  public fileDrop = new EventEmitter<File | FilePickerError>();

  @Output()
  public dragEnter = new EventEmitter<void>();

  @Output()
  public dragLeave = new EventEmitter<void>();

  // https://stackoverflow.com/a/21002544/12237560
  private dragCounter = 0;

  public constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'dragleave', () => {
      this.dragCounter--;

      if (this.dragCounter === 0) {
        this.dragLeave.emit();
      }
    });

    this.renderer.listen(this.el.nativeElement, 'dragenter', (event: DragEvent) => {
      this.dragEnter.emit();
      this.dragCounter++;

      event.stopPropagation();
      event.preventDefault();
    });

    this.renderer.listen(this.el.nativeElement, 'dragover', (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();
    });

    this.renderer.listen(this.el.nativeElement, 'drop', (event: DragEvent) => {
      this.dragCounter = 0;
      event.stopPropagation();
      event.preventDefault();

      let dt = event.dataTransfer;

      if (dt) {
        let files = dt.files;
        this.handleFiles(files);
      }
    });
  }

  private handleFiles(files: FileList) {
    let file = files[0];

    if (file == null) {
      this.fileDrop.emit('undefined');
    } else if (!file.type.match(this.accept)) {
      this.fileDrop.emit('invalid');
    } else if (this.maxSize > 0 && file.size > this.maxSize) {
      this.fileDrop.emit('tooBig');
    } else {
      this.fileDrop.emit(file);
    }
  }
}
