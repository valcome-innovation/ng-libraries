import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyDataGameScorePreviewComponent } from './hockeydata-game-score-preview.component';

describe('HockeydataGameScorePreviewComponent', () => {
  let component: HockeyDataGameScorePreviewComponent;
  let fixture: ComponentFixture<HockeyDataGameScorePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HockeyDataGameScorePreviewComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyDataGameScorePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
