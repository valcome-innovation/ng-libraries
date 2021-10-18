import { ApiParams } from '../../../model/types';
import { HockeyDataKnockoutStage } from '../../../model/hockeydata-knockout-stage';
import { HockeyDataSchedule } from '../../../model/hockeydata-schedule';
import { HockeyDataGameReport } from '../../../model/hockeydata-gamereport';
import { HockeyDataTeamStanding } from '../../../model/hockeydata-team-standing';

export abstract class HockeyDataIceHockeyService {

  public abstract getKnockoutStage(divisionId: number, params?: ApiParams): Promise<HockeyDataKnockoutStage | undefined>;

  public abstract getSchedule(divisionId: number, params?: ApiParams): Promise<HockeyDataSchedule | undefined>;

  public abstract getGameReport(gameId: string, params?: ApiParams): Promise<HockeyDataGameReport | undefined>;

  public abstract getStandings(divisionId: number, live: boolean, params?: ApiParams): Promise<HockeyDataTeamStanding[]>;
}
