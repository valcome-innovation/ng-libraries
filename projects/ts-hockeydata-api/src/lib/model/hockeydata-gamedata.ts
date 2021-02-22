import { HockeyDataPeriod } from './types';
import { HockeyDataLocation } from './hockeydata-location';
import { HockeyDataPeriodStats } from './hockeydata-period-stats';

export class HockeyDataGameReportGameData {
  public gameId: string;
  public divisionId: number;
  public divisionLongname: string;
  public gameName: string;
  public gameRound: number;

  public scheduledDate: Date;
  public scheduledTime: string;
  public startTime: string;
  public endTime: string;
  public isOvertime: number;
  public isShootOut: number;

  public homeTeamId: number;
  public homeTeamLongname: string;
  public homeTeamShortname: string;
  public homeTeamScore: number;

  public awayTeamId: number;
  public awayTeamLongname: string;
  public awayTeamShortname: string;
  public awayTeamScore: number;
  
  public location: HockeyDataLocation;
  public liveTime: number;
  public liveTimeFormatted: string;
  public liveTimePeriod: HockeyDataPeriod;
  public periodStats: HockeyDataPeriodStats[];
  public numberOfPeriods: number;
  public lengthOfPeriod: number;
  public numberOfOvertimes: number;
  public lengthOfOvertime: number;
  public shootoutShots: number;
}
