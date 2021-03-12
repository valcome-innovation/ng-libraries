import { Component, Input, OnInit } from '@angular/core';
import { ScoreResult } from 'ts-hockeydata-api';

@Component({
  selector: 'hd-encounter-results',
  templateUrl: './hockey-data-encounter-results.component.html',
  styleUrls: ['./hockey-data-encounter-results.component.scss']
})
export class HockeyDataEncounterResultsComponent implements OnInit {

  @Input()
  public results: ScoreResult[] = [];

  // TODO remove
  public ngOnInit(): void {
    this.results = ['won', 'lost', 'lost', 'won', 'live', 'scheduled', 'scheduled'];
  }
}
