import { Component, Input } from '@angular/core';
import { ScoreResult } from '@valcome/ts-hockeydata-api';

@Component({
  selector: 'hd-encounter-results',
  templateUrl: './hockey-data-encounter-results.component.html',
  styleUrls: ['./hockey-data-encounter-results.component.scss']
})
export class HockeyDataEncounterResultsComponent {

  @Input()
  public results: ScoreResult[] = [];
}
