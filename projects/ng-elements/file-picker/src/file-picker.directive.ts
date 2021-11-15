import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FilePickerError } from './file-picker-error';

@Directive({
  selector: '[valFilePicker]'
})
export class FilePickerDirective implements OnInit {

  @Input()
  public accept = '';

  @Input()
  public maxSize = 0;

  @Input()
  public get multiple() {
    return this._multiple;
  }

  public set multiple(value: any) {
    this._multiple = coerceBooleanProperty(value);
  }

  @Output()
  public filePick = new EventEmitter<File | FilePickerError>();

  @Input()
  public disablePick = false;

  private _multiple = false;
  private input: any;

  public constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit() {
    this.input = this.renderer.createElement('input');
    this.renderer.appendChild(this.el.nativeElement, this.input);

    this.renderer.setAttribute(this.input, 'type', 'file');
    this.renderer.setAttribute(this.input, 'accept', this.accept);
    this.renderer.setStyle(this.input, 'display', 'none');

    if (this.multiple) {
      this.renderer.setAttribute(this.input, 'multiple', 'multiple');
    }

    this.renderer.listen(this.input, 'change', (event: any) => {
      for (let file of event.target.files) {
        this.readFile(file);
      }
    });
  }

  public reset() {
    if (!this.input) {
      this.logInitError();
      return;
    }

    this.input.value = null;
  }

  @HostListener('click', ['$event'])
  public browse(event: MouseEvent) {
    event.stopPropagation();

    if (!this.input) {
      this.logInitError();
      return;
    }

    if (!this.disablePick) {
      this.input.click();
    }
  }

  private logInitError(): void {
    console.error(
      'It seems that ngOnInit() has not been executed or that the hidden input element is null. ' +
      'Did you mess with the DOM?'
    );
  }

  private readFile(file: File) {
    if (this.maxSize > 0 && file.size > this.maxSize) {
      this.filePick.emit('tooBig');
    } else {
      this.filePick.emit(file);
    }
  }
}

function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}
