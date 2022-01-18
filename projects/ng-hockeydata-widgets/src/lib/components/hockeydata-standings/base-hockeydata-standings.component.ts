import { Directive, Input } from '@angular/core';
import { HockeyDataTeamStanding } from '@valcome/ts-hockeydata-api';
import { LogoMap } from '../../model/logo-map';

@Directive()
export abstract class BaseHockeydataStandingsComponent {

  @Input()
  public standings?: HockeyDataTeamStanding[];

  @Input()
  public logoMap: LogoMap = {};

  @Input()
  public highlighted: string[] = [];

  public trackBy(item: HockeyDataTeamStanding): number {
    return item.teamId;
  }
}
