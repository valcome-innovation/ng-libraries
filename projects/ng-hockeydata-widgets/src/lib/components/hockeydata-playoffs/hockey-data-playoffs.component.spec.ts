import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HockeyDataPlayoffsComponent } from './hockey-data-playoffs.component';
import { HockeyDataTestData } from '../../../../../ts-hockeydata-api/src/test/hockey-data-test-data.spec';

describe('HockeyDataPlayoffsComponent', () => {

  let fixture: ComponentFixture<HockeyDataPlayoffsComponent>;
  let component: HockeyDataPlayoffsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HockeyDataPlayoffsComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HockeyDataPlayoffsComponent);
    component = fixture.componentInstance;
    component.knockoutPhase = HockeyDataTestData.createKnockoutStage().phases[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
