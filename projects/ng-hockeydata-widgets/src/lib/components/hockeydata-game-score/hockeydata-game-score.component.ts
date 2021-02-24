import { Component, Input } from '@angular/core';
import { HockeyDataGameReport } from '@valcome/ts-hockeydata-api';
import { LogoAlignment } from '../team-display/team-display.component';

export type DisplayMode = 'inline' | 'column';

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

  @Input()
  public showPeriodScores = true;

  @Input()
  public showTime = true;

  public homeLogoAlignment: LogoAlignment = 'top';
  public awayLogoAlignment: LogoAlignment = 'top';

  @Input()
  public set logoAlignment(mode: DisplayMode) {
    if (mode === 'inline') {
      this.homeLogoAlignment = 'right';
      this.awayLogoAlignment = 'left';
    }
  }
}
