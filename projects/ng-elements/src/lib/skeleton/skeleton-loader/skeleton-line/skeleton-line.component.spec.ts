import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLineComponent } from './skeleton-line.component';

describe('SkeletonLineComponent', () => {
  let component: SkeletonLineComponent;
  let fixture: ComponentFixture<SkeletonLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with full widh', () => {
    expect(component.width).toBe('100%');
  });

  it('should accept a width interval', () => {
    component.widthInterval = [100, 150];
    component.ngOnInit();

    let widthNumber: number = Number(component.width.substr(0, 3));

    expect(widthNumber).toBeGreaterThanOrEqual(100);
    expect(widthNumber).toBeLessThanOrEqual(150);
  });

  it('should get the width unit right', () => {
    component.widthInterval = [77]
    component.widthUnit = 'vw';
    component.ngOnInit();

    expect(component.width).toBe('77vw');
  });

  it('should accept an invalid width interval', () => {
    component.widthInterval = null;
    component.ngOnInit();

    expect(component.width).toBe('100%');
  });
});
