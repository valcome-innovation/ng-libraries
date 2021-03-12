import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodDisplayComponent } from './period-display.component';

describe('PeriodDisplayComponent', () => {
  let component: PeriodDisplayComponent;
  let fixture: ComponentFixture<PeriodDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
