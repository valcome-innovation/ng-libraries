import { IHockeyDataPeriodStats } from './types';

export class HockeyDataPeriodStats implements IHockeyDataPeriodStats {
  public period: string;
  public homeScore: number;
  public awayScore: number;
  public homeShotsOnGoal: number;
  public awayShotsOnGoal: number;
  public startTime: string;
  public endTime: string;

  public constructor(period: string, homeScore: number, awayScore: number, homeShotsOnGoal: number, awayShotsOnGoal: number, startTime: string, endTime: string) {
    this.period = period;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.homeShotsOnGoal = homeShotsOnGoal;
    this.awayShotsOnGoal = awayShotsOnGoal;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
