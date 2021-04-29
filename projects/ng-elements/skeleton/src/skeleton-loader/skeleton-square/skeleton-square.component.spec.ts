import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSquareComponent } from './skeleton-square.component';

describe('SkeletonSquareComponent', () => {
  let component: SkeletonSquareComponent;
  let fixture: ComponentFixture<SkeletonSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonSquareComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get dimensions right', () => {
    component.dimensions = 75;
    component.unit = '%';
    component.ngOnInit();

    expect(component.width).toEqual('75%')
    expect(component.height).toEqual('75%')
  });
});
