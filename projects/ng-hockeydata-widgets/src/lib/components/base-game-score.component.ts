import { Directive, Input } from '@angular/core';
import { HockeyDataGameReport } from 'ts-hockeydata-api';

@Directive()
export abstract class BaseGameScoreComponent {
  @Input()
  public gameReport?: HockeyDataGameReport;

  @Input()
  public homeLogo?: string;

  @Input()
  public awayLogo?: string;
}
