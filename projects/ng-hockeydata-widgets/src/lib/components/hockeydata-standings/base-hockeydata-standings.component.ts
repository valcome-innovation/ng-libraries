import { Directive, Input, TrackByFunction } from '@angular/core';
import { HockeyDataTeamStanding } from '@valcome/ts-hockeydata-api';
import { LogoMap } from '../../model/logo-map';

export type StandingConfig = {
  standing?: HockeyDataTeamStanding[],
  logoMap: LogoMap
};

export type TeamStandingWithLogo = {
  standing: HockeyDataTeamStanding,
  logo: string;
}

@Directive()
export abstract class BaseHockeydataStandingsComponent {

  @Input()
  public set standingConfig({ standing, logoMap }: StandingConfig) {
    if (standing) {
      this.standings = standing.map(s => ({ standing: s, logo: logoMap[s.teamShortname] }));
    } else {
      this.standings = [];
    }
  }

  public standings: TeamStandingWithLogo[] = [];

  @Input()
  public highlighted: string[] = [];

  public trackBy: TrackByFunction<TeamStandingWithLogo> = (index: number, item: TeamStandingWithLogo) => {
    return item.standing.teamId;
  }
}
