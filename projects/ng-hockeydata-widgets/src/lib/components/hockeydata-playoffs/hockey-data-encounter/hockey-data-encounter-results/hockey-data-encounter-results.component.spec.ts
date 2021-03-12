import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HockeyDataEncounterResultsComponent } from './hockey-data-encounter-results.component';

describe('HockeyDataEncounterResultsComponent', () => {

  let fixture: ComponentFixture<HockeyDataEncounterResultsComponent>;
  let component: HockeyDataEncounterResultsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HockeyDataEncounterResultsComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HockeyDataEncounterResultsComponent);
    component = fixture.componentInstance;
    component.results = ['won', 'lost', 'live', 'scheduled'];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
