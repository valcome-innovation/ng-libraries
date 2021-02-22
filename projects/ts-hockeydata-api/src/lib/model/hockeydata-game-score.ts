export class HockeyDataTeamScore {
  public homeTeamLongname: string;
  public homeTeamShortname: string;
  public homeTeamScore: number;
  public awayTeamId: number;
  public awayTeamLongname: string;
  public awayTeamShortname: string;
  public awayTeamScore: number;

  public constructor(homeTeamLongname: string, homeTeamShortname: string, homeTeamScore: number, awayTeamId: number, awayTeamLongname: string, awayTeamShortname: string, awayTeamScore: number) {
    this.homeTeamLongname = homeTeamLongname;
    this.homeTeamShortname = homeTeamShortname;
    this.homeTeamScore = homeTeamScore;
    this.awayTeamId = awayTeamId;
    this.awayTeamLongname = awayTeamLongname;
    this.awayTeamShortname = awayTeamShortname;
    this.awayTeamScore = awayTeamScore;
  }
}
