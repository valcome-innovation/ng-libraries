import { Directive, ElementRef, Input, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AutocompleteComponent } from './autocomplete.component';
import { ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BaseSubscriptionComponent } from '@valcome/ng-core';

@Directive({ selector: '[valAutocomplete]' })
export class AutocompleteDirective extends BaseSubscriptionComponent implements OnInit {

  @Input()
  public valAutocomplete!: AutocompleteComponent;

  private overlayRef?: OverlayRef;

  public constructor(private host: ElementRef<HTMLInputElement>,
                     private ngControl: NgControl,
                     private vcr: ViewContainerRef,
                     private overlay: Overlay) {
    super();
  }

  public get control(): AbstractControl | null {
    return this.ngControl.control;
  }

  public ngOnInit(): void {
    this.addSub(fromEvent(this.origin, 'focus').subscribe(() => {
      this.openDropdown();

      this.valAutocomplete.optionsClick()
        .pipe(takeUntil(this.overlayRef!.detachments()))
        .subscribe((value: string) => {
          this.control?.setValue(value);
          this.control?.setValue(value);
          this.close();
        });
    }));
  }

  public openDropdown(): void {
    this.overlayRef = this.overlay.create({
      width: this.origin.offsetWidth,
      maxHeight: 40 * 3,
      backdropClass: '',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.getOverlayPosition()
    });

    const template = new TemplatePortal(this.valAutocomplete.rootTemplate, this.vcr);
    this.overlayRef.attach(template);

    overlayClickOutside(this.overlayRef, this.origin).subscribe(() => this.close());
  }

  private close(): void {
    this.overlayRef?.detach();
    this.overlayRef = undefined;
  }

  private getOverlayPosition(): FlexibleConnectedPositionStrategy {
    const positions = [
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' }
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' }
      )
    ];

    return this.overlay
      .position()
      .flexibleConnectedTo(this.origin)
      .withPositions(positions)
      .withFlexibleDimensions(false)
      .withPush(false);
  }

  get origin() {
    return this.host.nativeElement;
  }
}

export function overlayClickOutside(overlayRef: OverlayRef, origin: HTMLElement): Observable<MouseEvent> {
  return fromEvent<MouseEvent>(document, 'click')
    .pipe(filter(event => {
        const clickTarget = event.target as HTMLElement;
        const notOrigin = clickTarget !== origin; // the input
        const notOverlay = !!overlayRef && !overlayRef.overlayElement.contains(clickTarget); // the autocomplete
        return notOrigin && notOverlay;
      }),
      takeUntil(overlayRef.detachments())
    )
}
