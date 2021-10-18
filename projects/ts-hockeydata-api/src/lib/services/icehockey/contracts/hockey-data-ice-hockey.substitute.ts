import { HockeyDataIceHockeyService } from './hockey-data-ice-hockey.service';
import { ApiParams } from '../../../model/types';
import { HockeyDataTeamStanding } from '../../../model/hockeydata-team-standing';

export class HockeyDataIceHockeySubstitute implements HockeyDataIceHockeyService {

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
