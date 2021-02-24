import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyDataGameScoreComponent } from './hockeydata-game-score.component';
import { ICEHOCKEY_API_CONFIG } from '@valcome/ts-hockeydata-api';
import { HttpClient } from '@angular/common/http';
import createSpy = jasmine.createSpy;

describe('HockeydataGameScoreComponent', () => {
  let component: HockeyDataGameScoreComponent;
  let fixture: ComponentFixture<HockeyDataGameScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HockeyDataGameScoreComponent
      ],
      providers: [
        { provide: ICEHOCKEY_API_CONFIG, useValue: { apiKey: 'apiKey', referer: 'referer' } },
        { provide: HttpClient, useValue: { jsonp: createSpy('jsonpMock') } },
      ]
    }).compileComponents();
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
