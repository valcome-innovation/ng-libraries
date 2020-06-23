import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonRectComponent } from './skeleton-rect.component';

describe('SkeletonRectComponent', () => {
  let component: SkeletonRectComponent;
  let fixture: ComponentFixture<SkeletonRectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonRectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
