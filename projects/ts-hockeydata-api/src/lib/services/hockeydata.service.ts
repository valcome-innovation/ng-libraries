import { HockeyDataDAO } from './hockeydata.dao';
import { ApiParams, HdDivisionResponse, HdKeyValue, HdLeague, HdSeason, HdSport } from '../model/types';
import { HockeyDataGameReportMapper } from '../mapper/hockeydata-gamereport.mapper';
import { HockeyDataGameReport } from '../model/hockeydata-gamereport';
import { map } from 'rxjs/operators';
import { HockeyDataTeamStanding } from '../model/hockeydata-team-standing';
import { HockeyDataTeamStandingMapper } from '../mapper/hockeydata-team-standing.mapper';
import { HockeyDataKnockoutStage } from '../model/hockeydata-knockout-stage';
import { HockeyDataKnockoutStageMapper } from '../mapper/hockeydata-knockout-stage.mapper';
import { HockeyDataSchedule } from '../model/hockeydata-schedule';
import { HockeyDataScheduleMapper } from '../mapper/hockeydata-schedule.mapper';
import { Observable } from 'rxjs';

export abstract class HockeyDataService {

  protected constructor(protected dao: HockeyDataDAO,
                        protected gameReportMapper: HockeyDataGameReportMapper,
                        protected teamStandingMapper: HockeyDataTeamStandingMapper,
                        protected knockoutStageMapper: HockeyDataKnockoutStageMapper,
                        protected scheduleMapper: HockeyDataScheduleMapper) {
  }

  public getSports(params: ApiParams = {}): Observable<HdKeyValue<HdSport>[]> {
    return this.dao.getSports(params)
      .pipe(map(res => res.data));
  }

  public getLeagues(sport: HdSport,
                    params: ApiParams = {}): Observable<HdLeague> {
    return this.dao.getLeagues(sport, params)
      .pipe(map(res => res.data));
  }

  public getSeasons(sport: HdSport,
                    leagueId: number,
                    params: ApiParams = {}): Observable<HdSeason> {
    return this.dao.getSeasons(sport, leagueId, params)
      .pipe(map(res => res.data));
  }

  public getDivisionInfo(seasonId: number,
                         leagueId: number,
                         params: ApiParams = {}): Observable<HdDivisionResponse> {
    return this.dao.getDivisionInfo(seasonId, leagueId, params)
      .pipe(map(res => res.data));
  }

  public getKnockoutStage(divisionId: number,
                          params: ApiParams = {}): Promise<HockeyDataKnockoutStage> {
    return this.dao.fetchKnockoutStage(divisionId, params)
      .pipe(map(res => this.knockoutStageMapper.fromJson(res.data)))
      .toPromise();
  }

  public getSchedule(divisionId: number,
                     params: ApiParams = {}): Promise<HockeyDataSchedule> {
    return this.dao.fetchSchedule(divisionId, params)
      .pipe(map(res => this.scheduleMapper.fromJson(res.data)))
      .toPromise();
  }

  public getGameReport(gameId: string,
                       params: ApiParams = {}): Promise<HockeyDataGameReport> {
    return this.dao.fetchGameReport(gameId, params)
      .pipe(map(res => this.gameReportMapper.fromJson(res.data)))
      .toPromise();
  }

  public getStandings(divisionId: number,
                      live: boolean,
                      params: ApiParams = {}): Promise<HockeyDataTeamStanding[]> {
    return this.dao.fetchStandings(divisionId, live, params)
      .pipe(map(res => this.teamStandingMapper.fromJsonArray(res.data?.rows ?? [])))
      .toPromise();
  }
}
