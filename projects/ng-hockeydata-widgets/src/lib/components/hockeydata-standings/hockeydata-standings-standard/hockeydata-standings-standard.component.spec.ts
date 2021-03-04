import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyDataStandingsStandardComponent } from './hockeydata-standings-standard.component';

describe('HockeydataStandingsTableComponent', () => {
  let component: HockeyDataStandingsStandardComponent;
  let fixture: ComponentFixture<HockeyDataStandingsStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HockeyDataStandingsStandardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyDataStandingsStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
