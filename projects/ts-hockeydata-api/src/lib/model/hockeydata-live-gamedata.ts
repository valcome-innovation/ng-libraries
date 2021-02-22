export class HockeyDataLiveGameData {
  public liveTime: number;
  public liveTimeFormatted: string;
  public liveTimePeriod: string;

  public constructor(liveTime: number, liveTimeFormatted: string, liveTimePeriod: string) {
    this.liveTime = liveTime;
    this.liveTimeFormatted = liveTimeFormatted;
    this.liveTimePeriod = liveTimePeriod;
  }
}
