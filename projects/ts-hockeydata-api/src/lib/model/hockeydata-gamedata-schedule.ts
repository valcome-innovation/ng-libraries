export class HockeyDataGameDataSchedule {
  public scheduledDate: Date;
  public scheduledTime: string;
  public startTime: string;
  public endTime: string;
  public isOvertime: boolean;
  public isShootOut: boolean;

  public constructor(timestamp: number,
                     scheduledTime: string,
                     startTime: string,
                     endTime: string,
                     isOvertime: boolean,
                     isShootOut: boolean) {
    this.scheduledDate = new Date(timestamp);
    this.scheduledTime = scheduledTime;
    this.startTime = startTime;
    this.endTime = endTime;
    this.isOvertime = isOvertime;
    this.isShootOut = isShootOut;
  }
}
