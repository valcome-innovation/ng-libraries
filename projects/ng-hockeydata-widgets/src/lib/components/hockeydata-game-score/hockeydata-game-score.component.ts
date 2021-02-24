import { Component, Input } from '@angular/core';
import { HockeyDataGameReport } from '@valcome/ts-hockeydata-api';

@Component({
  selector: 'hockeydata-game-score',
  templateUrl: './hockeydata-game-score.component.html',
  styleUrls: ['./hockeydata-game-score.component.scss']
})
export class HockeyDataGameScoreComponent {

  @Input()
  public gameReport?: HockeyDataGameReport;

  @Input()
  public homeLogo?: string;

  @Input()
  public awayLogo?: string;
}
