import { HockeyDataDAO } from './hockeydata.dao';
import { ApiParams } from '../model/types';
import { HockeyDataGameReportMapper } from '../mapper/hockeydata-gamereport.mapper';
import { HockeyDataGameReport } from '../model/hockeydata-gamereport';
import { map } from 'rxjs/operators';

export abstract class HockeyDataService {

  protected constructor(protected dao: HockeyDataDAO,
                        protected gameReportMapper: HockeyDataGameReportMapper) {
  }

  public getGameReport(gameId: string, params: ApiParams = {}): Promise<HockeyDataGameReport> {
    return this.dao.fetchGameReport(gameId, params)
      .pipe(map(data => this.gameReportMapper.fromJson(data)))
      .toPromise();
  }
}
