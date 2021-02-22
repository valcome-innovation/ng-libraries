import { HockeyDataPeriodStats } from './hockeydata-period-stats';

export class HockeyDataPeriodGameData {
  public periodStats: HockeyDataPeriodStats[];
  public numberOfPeriods: number;
  public lengthOfPeriod: number;
  public numberOfOvertimes: number;
  public lengthOfOvertime: number;
  public shootoutShots: number;

  public constructor(periodStats: HockeyDataPeriodStats[], numberOfPeriods: number, lengthOfPeriod: number, numberOfOvertimes: number, lengthOfOvertime: number, shootoutShots: number) {
    this.periodStats = periodStats;
    this.numberOfPeriods = numberOfPeriods;
    this.lengthOfPeriod = lengthOfPeriod;
    this.numberOfOvertimes = numberOfOvertimes;
    this.lengthOfOvertime = lengthOfOvertime;
    this.shootoutShots = shootoutShots;
  }
}
