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
    component.phases = HockeyDataTestData.createKnockoutStage().phases;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
