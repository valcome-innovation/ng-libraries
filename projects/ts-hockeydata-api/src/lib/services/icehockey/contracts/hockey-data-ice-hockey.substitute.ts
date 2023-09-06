import { HockeyDataIceHockeyService } from './hockey-data-ice-hockey.service';
import { ApiParams, HdDivisionResponse, HdKeyValue, HdLeague, HdSeason, HdSport } from '../../../model/types';
import { HockeyDataTeamStanding } from '../../../model/hockeydata-team-standing';
import { Observable, of } from 'rxjs';

export class HockeyDataIceHockeySubstitute
  implements HockeyDataIceHockeyService {

  public getSports(params?: ApiParams): Observable<HdKeyValue<HdSport>[]> {
    return of([]);
  }

  public getLeagues(sport: HdSport, params?: ApiParams): Observable<HdLeague | undefined> {
    return of(undefined);
  }

  public getSeasons(sport: HdSport, leagueId: number, params?: ApiParams): Observable<HdSeason | undefined> {
    return of(undefined);
  }

  public getDivisionInfo(seasonId: number, leagueId: number, params: ApiParams): Observable<HdDivisionResponse | undefined> {
    return of(undefined);
  }

  public getGameReport(gameId: string, params: ApiParams): Promise<undefined> {
    return Promise.resolve(undefined);
  }

  public getKnockoutStage(divisionId: number, params: ApiParams): Promise<undefined> {
    return Promise.resolve(undefined);
  }

  public getSchedule(divisionId: number, params: ApiParams): Promise<undefined> {
    return Promise.resolve(undefined);
  }

  public getStandings(divisionId: number, live: boolean, params: ApiParams): Promise<HockeyDataTeamStanding[]> {
    return Promise.resolve([]);
  }
}
