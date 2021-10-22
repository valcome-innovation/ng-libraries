import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { RenderService } from '@valcome/ng-core';

@Directive({
  selector: '[valBackgroundParallax]'
})
export class BackgroundParallaxDirective implements OnInit {

  @Input()
  public parallaxRatio: number = -0.3;

  @Input()
  public initialTop: number = 0;

  @Input()
  public initialLeft: string = 'center';

  @Input()
  public isEnabled = true;

  private get verticalPosition(): number {
    return (this.initialTop - (window.scrollY * this.parallaxRatio));
  }

  public constructor(private eleRef: ElementRef,
                     private renderService: RenderService) {
  }

  public ngOnInit(): void {
    if (this.renderService.isBrowser()) {
      this.onWindowScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll() {
    if (this.isEnabled) {
      this.eleRef.nativeElement.style.backgroundPosition = `${this.initialLeft} ${this.verticalPosition}px`;
    }
  }
}
