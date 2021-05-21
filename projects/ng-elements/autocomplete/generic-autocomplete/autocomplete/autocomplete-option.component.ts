import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'val-autocomplete-option',
  template: `
    <div class="option">
      <ng-content></ng-content>
    </div>
  `
})
export class AutocompleteOptionComponent implements OnInit {

  @Input()
  public value!: string;

  public click$!: Observable<string>;

  public constructor(private host: ElementRef) {
  }

  public ngOnInit(): void {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }

  public get element(): HTMLDivElement {
    return this.host.nativeElement;
  }
}
