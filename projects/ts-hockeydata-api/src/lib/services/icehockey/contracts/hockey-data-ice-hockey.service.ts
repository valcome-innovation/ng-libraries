import { ApiParams, HdDivisionResponse, HdKeyValue, HdLeague, HdSeason, HdSport } from '../../../model/types';
import { HockeyDataKnockoutStage } from '../../../model/hockeydata-knockout-stage';
import { HockeyDataSchedule } from '../../../model/hockeydata-schedule';
import { HockeyDataGameReport } from '../../../model/hockeydata-gamereport';
import { HockeyDataTeamStanding } from '../../../model/hockeydata-team-standing';
import { Observable } from 'rxjs';

export abstract class HockeyDataIceHockeyService {

  public abstract getSports(params?: ApiParams): Observable<HdKeyValue<HdSport>[] | undefined>;

  public abstract getLeagues(sport: HdSport,
                             params?: ApiParams): Observable<HdLeague[] | undefined>;

  public abstract getSeasons(sport: HdSport,
                             leagueId: number,
                             params?: ApiParams): Observable<HdSeason[] | undefined>;

  public abstract getDivisionInfo(seasonId: number,
                                  leagueId: number,
                                  params?: ApiParams): Observable<HdDivisionResponse | undefined>;

  public abstract getKnockoutStage(divisionId: number,
                                   params?: ApiParams): Promise<HockeyDataKnockoutStage | undefined>;

  public abstract getSchedule(divisionId: number,
                              params?: ApiParams): Promise<HockeyDataSchedule | undefined>;

  public abstract getGameReport(gameId: string,
                                params?: ApiParams): Promise<HockeyDataGameReport | undefined>;

  public abstract getStandings(divisionId: number,
                               live: boolean,
                               params?: ApiParams): Promise<HockeyDataTeamStanding[]>;
}
