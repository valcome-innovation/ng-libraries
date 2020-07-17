import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ScrollTopService } from './scroll-to-top.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RenderService, UniversalModule } from 'ng-core';
import { Subject } from 'rxjs';
import { Event, NavigationEnd } from '@angular/router';

describe('ScrollToTopService', () => {

  const routeEventEmitter = new Subject<Event>();

  let service: ScrollTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        UniversalModule,
        RouterTestingModule
      ],
      providers: [
        ScrollTopService
      ]
    });

    const router = {
      events: routeEventEmitter.asObservable()
    } as any

    service = new ScrollTopService(TestBed.inject(RenderService), router);
  })

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should enableScrollToTop', fakeAsync(() => {
    spyOn(window, 'scroll');

    service.enableScrollToTop(false);
    routeEventEmitter.next(new NavigationEnd(1, '', ''))

    tick(1000);

    expect(window.scroll).toHaveBeenCalled();
  }));

  it('should enableScrollToTop and skip first', fakeAsync(() => {
    spyOn(window, 'scroll');

    service.enableScrollToTop(true);
    routeEventEmitter.next(new NavigationEnd(1, '', ''))

    tick(1000);

    expect(window.scroll).not.toHaveBeenCalled();
  }));
})
