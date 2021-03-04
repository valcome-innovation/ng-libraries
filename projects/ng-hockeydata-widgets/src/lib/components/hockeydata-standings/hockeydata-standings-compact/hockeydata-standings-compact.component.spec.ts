import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeydataStandingsCompactComponent } from './hockeydata-standings-compact.component';

describe('HockeydataStandingsCompactComponent', () => {
  let component: HockeydataStandingsCompactComponent;
  let fixture: ComponentFixture<HockeydataStandingsCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HockeydataStandingsCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeydataStandingsCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
