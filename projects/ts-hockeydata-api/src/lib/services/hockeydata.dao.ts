import { HttpClient } from '@angular/common/http';
import { UrlBuilder } from '../../../../ts-core/src/lib/builder/url.builder';
import { Observable } from 'rxjs';
import { ApiParams, HockeyDataApiCall, HockeyDataLeague, HockeyDataSport, IHockeyDataGameReport, sports } from '../model/types';


export abstract class HockeyDataDAO {

  private readonly apiKey: string;
  private readonly sport: HockeyDataSport;
  private readonly league: HockeyDataLeague;

  protected constructor(league: HockeyDataLeague,
                        apiKey: string,
                        protected httpClient: HttpClient) {
    this.league = league;
    this.apiKey = apiKey;
    this.sport = sports[league];
  }

  public fetchGameReport(gameId: string, params: ApiParams = {}): Observable<IHockeyDataGameReport> {
    params.gameId = gameId;
    return this.call('GetGameReport', params);
  }

  public call(call: HockeyDataApiCall, params: ApiParams): Observable<any> {
    const baseUrl = this.getBaseUrlBuilder(call);
    const apiUrl = this.getCallUrl(baseUrl, params);
    return this.httpClient.get(apiUrl);
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
    builder.addQueryParam('apiKey', this.apiKey);
    return builder;
  }
}
