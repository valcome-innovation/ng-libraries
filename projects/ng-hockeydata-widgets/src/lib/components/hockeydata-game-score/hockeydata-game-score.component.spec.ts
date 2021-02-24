import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyDataGameScoreComponent } from './hockeydata-game-score.component';

describe('HockeydataGameScoreComponent', () => {
  let component: HockeyDataGameScoreComponent;
  let fixture: ComponentFixture<HockeyDataGameScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HockeyDataGameScoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyDataGameScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
