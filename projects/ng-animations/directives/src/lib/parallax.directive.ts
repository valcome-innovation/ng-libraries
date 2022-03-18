import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { RenderService } from '@valcome/ng-core';

@Directive({
  selector: '[valParallax]'
})
export class ParallaxDirective implements OnInit {

  @Input()
  public parallaxRatio = -0.3;

  @Input()
  public parallaxTop = 0;

  public constructor(private eleRef: ElementRef,
                     private renderService: RenderService) {
  }

  public ngOnInit(): void {
    if (this.renderService.isBrowser()) {
      this.createRelativeWrapper();
      this.makeElementAbsolute();
      this.onWindowScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll() {
    this.eleRef.nativeElement.style.top = (this.parallaxTop - (window.scrollY * this.parallaxRatio)) + 'px';
  }

  private makeElementAbsolute(): void {
    this.eleRef.nativeElement.style.position = 'absolute';
    this.eleRef.nativeElement.style.top = this.parallaxTop + 'px';
    this.eleRef.nativeElement.style.left = '0';
    this.eleRef.nativeElement.style.right = '0';
    this.eleRef.nativeElement.style.bottom = '0';
  }

  private createRelativeWrapper(): void {
    let wrapper = document.createElement('div');
    let element = this.eleRef.nativeElement;

    wrapper.style.position = 'relative'
    wrapper.style.height = element.style.height;
    wrapper.style.width = element.style.width;

    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
  }
}
