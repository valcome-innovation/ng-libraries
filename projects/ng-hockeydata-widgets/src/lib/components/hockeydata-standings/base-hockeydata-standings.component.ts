import { Directive, Input } from '@angular/core';
import { HockeyDataTeamStanding } from '@valcome/ts-hockeydata-api';

@Directive()
export abstract class BaseHockeydataStandingsComponent {
  @Input()
  public standings?: HockeyDataTeamStanding[];

  @Input()
  public logos: Record<string, string> = {};

  @Input()
  public highlighted: string[] = [];
}
