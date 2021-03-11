import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ApiParams,
  HockeyDataApiCall,
  HockeyDataApiConfig,
  HockeyDataLeague,
  HockeyDataSport,
  IHockeyDataGameReport,
  IHockeyDataKnockOutStage,
  IHockeyDataStandings,
  sports
} from '../model/types';
import { UrlBuilder } from '@valcome/ts-core';


export abstract class HockeyDataDAO {

  private readonly apiConfig: HockeyDataApiConfig;
  private readonly sport: HockeyDataSport;
  private readonly league: HockeyDataLeague;

  protected constructor(league: HockeyDataLeague,
                        apiConfig: HockeyDataApiConfig,
                        protected httpClient: HttpClient) {
    this.league = league;
    this.apiConfig = apiConfig;
    this.sport = sports[league];
  }

  public fetchGameReport(gameId: string, params: ApiParams = {}): Observable<IHockeyDataGameReport> {
    params.gameId = gameId;
    return this.call('GetGameReport', params);
  }

  public fetchStandings(divisionId: number, live: boolean, params: ApiParams = {}): Observable<IHockeyDataStandings> {
    params.divisionId = divisionId;
    params.widgetOptions = `{"live":${live}}`;
    return this.call('Standings', params);
  }

  public fetchKnockoutStage(divisionId: number, params: ApiParams = {}): Observable<IHockeyDataKnockOutStage> {
    params.divisionId = divisionId;
    return this.call('KnockoutStage', params);
  }

  public call(call: HockeyDataApiCall, params: ApiParams): Observable<any> {
    const baseUrl = this.getBaseUrlBuilder(call);
    const apiUrl = this.getCallUrl(baseUrl, params);

    return this.httpClient.jsonp(apiUrl, 'callback');
  }

  private getCallUrl(builder: UrlBuilder, params: ApiParams): string {
    for (const key of Object.keys(params ?? {})) {
      builder.addQueryParam(key, params[key]);
    }
    return builder.getUrl();
  }

  private getBaseUrlBuilder(call: HockeyDataApiCall): UrlBuilder {
    const builder = new UrlBuilder('https://api.hockeydata.net/data');
    builder.addPath(this.league);
    builder.addPath(call);
    builder.addQueryParam('apiKey', this.apiConfig.apiKey);
    builder.addQueryParam('referer', this.apiConfig.referer);
    return builder;
  }
}
