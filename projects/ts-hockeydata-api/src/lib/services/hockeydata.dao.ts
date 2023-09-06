import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ApiParams,
  HdApiResponse,
  HdKeyValue,
  HockeyDataApiCall,
  HockeyDataApiConfig,
  HdLeagueSlug,
  HdSport,
  IHockeyDataGameReport,
  IHockeyDataKnockOutStage,
  IHockeyDataStandings,
  HdLeague,
  HdSeason,
  HdDivisionResponse
} from '../model/types';
import { UrlBuilder } from '@valcome/ts-core';

export abstract class HockeyDataDAO {

  private readonly apiConfig: HockeyDataApiConfig;
  private readonly league: HdLeagueSlug;

  protected constructor(league: HdLeagueSlug,
                        apiConfig: HockeyDataApiConfig,
                        protected httpClient: HttpClient) {
    this.league = league;
    this.apiConfig = apiConfig;
  }

  public getSports(params: ApiParams = {}): Observable<HdApiResponse<'data', HdKeyValue<HdSport>[]>> {
    return this.call('GetSports', params);
  }

  public getLeagues(sport: HdSport,
                    params: ApiParams = {}): Observable<HdApiResponse<'data', HdLeague[]>> {
    params.sport = sport;

    return this.call('GetLeagues', params);
  }

  public getSeasons(sport: HdSport,
                    leagueId: number,
                    params: ApiParams = {}): Observable<HdApiResponse<'data', HdSeason[]>> {
    params.sport = sport;
    params.leagueId = leagueId;

    return this.call('GetSeasons', params);
  }

  public getDivisionInfo(seasonId: number,
                         leagueId: number,
                         params: ApiParams = {}): Observable<HdApiResponse<'data', HdDivisionResponse>> {
    params.id = seasonId;
    params.seasonId = seasonId;
    params.leagueId = leagueId;

    return this.call('GetDivisionInfo', params);
  }

  public fetchGameReport(gameId: string, params: ApiParams = {}): Observable<IHockeyDataGameReport> {
    params.gameId = gameId;

    return this.call('GetGameReport', params);
  }

  public fetchStandings(divisionId: number,
                        live: boolean,
                        params: ApiParams = {}): Observable<IHockeyDataStandings> {
    params.divisionId = divisionId;
    params.widgetOptions = `{"live":${live}}`;

    return this.call('Standings', params);
  }

  public fetchKnockoutStage(divisionId: number,
                            params: ApiParams = {}): Observable<IHockeyDataKnockOutStage> {
    params.divisionId = divisionId;

    return this.call('KnockoutStage', params);
  }

  public fetchSchedule(divisionId: number,
                       params: ApiParams = {}): Observable<any> {
    params.divisionId = divisionId;

    return this.call('Schedule', params);
  }

  public call(call: HockeyDataApiCall,
              params: ApiParams): Observable<any> {
    const baseUrl = this.getBaseUrlBuilder(call);
    const apiUrl = this.getCallUrl(baseUrl, params);

    return this.httpClient.jsonp(apiUrl, 'callback');
  }

  private getCallUrl(builder: UrlBuilder,
                     params: ApiParams): string {
    for (const key of Object.keys(params ?? {})) {
      builder.addQueryParam(key, params[key]);
    }
    return builder.getUrl();
  }

  private getBaseUrlBuilder(call: HockeyDataApiCall): UrlBuilder {
    return new UrlBuilder('https://api.hockeydata.net/data')
      .addPath(this.league)
      .addPath(call)
      .addQueryParam('apiKey', this.apiConfig.apiKey)
      .addQueryParam('referer', this.apiConfig.referer);
  }
}
