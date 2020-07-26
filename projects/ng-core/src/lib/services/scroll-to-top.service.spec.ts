import { TestBed } from '@angular/core/testing';
import { ScrollTopService } from './scroll-to-top.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { Event, NavigationEnd } from '@angular/router';
import { JsUtils } from '../utils/js.utils';
import { UniversalModule } from '../universal/universal.module';
import { RenderService } from '../universal/render.service';

describe('ScrollToTopService', () => {

  let service: ScrollTopService;
  let routeEventEmitter: Subject<Event>;

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

    routeEventEmitter = new Subject<Event>()

    const router = {
      events: routeEventEmitter.asObservable()
    } as any

    service = new ScrollTopService(TestBed.inject(RenderService), router);
  })

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should enableScrollToTop', done => {
    spyOn(window, 'scroll');

    service.enableScrollToTop(false);
    routeEventEmitter.next(new NavigationEnd(1, '', ''))

    JsUtils.callAfterStackResolved(() => {
      expect(window.scroll).toHaveBeenCalled();
      done();
    })
  });

  it('should enableScrollToTop and skip first', done => {
    spyOn(window, 'scroll');

    service.enableScrollToTop(true);
    routeEventEmitter.next(new NavigationEnd(1, '', ''))

    JsUtils.callAfterStackResolved(() => {
      expect(window.scroll).not.toHaveBeenCalled();
      done();
    })
  });
})
