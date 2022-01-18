import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HockeyDataEncounterComponent } from './hockey-data-encounter.component';
import { HockeyDataTestData } from '../../../../../../ts-hockeydata-api/src/test/hockey-data-test-data.spec';

describe('HockeyDataEncounterComponent', () => {

  let fixture: ComponentFixture<HockeyDataEncounterComponent>;
  let component: HockeyDataEncounterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HockeyDataEncounterComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HockeyDataEncounterComponent);
    component = fixture.componentInstance;
    component.encounterConfig = {
      encounter: HockeyDataTestData.createKnockoutStage().phases[0].encounters[0],
      logoMap: {}
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set data', () => {
    expect(component.encounter).toBeTruthy();
    expect(component.leftTeam).toBeTruthy();
    expect(component.rightTeam).toBeTruthy();
  });
});
