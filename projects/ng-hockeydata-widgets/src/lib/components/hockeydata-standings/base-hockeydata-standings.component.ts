import { Directive, Input } from '@angular/core';
import { HockeyDataTeamStanding } from '@valcome/ts-hockeydata-api';

export type LogoMap = Record<string, string>;

@Directive()
export abstract class BaseHockeydataStandingsComponent {
  
  @Input()
  public standings?: HockeyDataTeamStanding[];

  @Input()
  public logoMap: LogoMap = {};

  @Input()
  public highlighted: string[] = [];
}
