export class HockeyDataGameScore {
  public homeTeamId: number;
  public homeTeamLongName: string;
  public homeTeamShortName: string;
  public homeTeamScore: number;
  public awayTeamId: number;
  public awayTeamLongName: string;
  public awayTeamShortName: string;
  public awayTeamScore: number;

  public constructor(homeTeamId: number,
                     homeTeamLongname: string,
                     homeTeamShortname: string,
                     homeTeamScore: number,
                     awayTeamId: number,
                     awayTeamLongname: string,
                     awayTeamShortname: string,
                     awayTeamScore: number) {
    this.homeTeamId = homeTeamId;
    this.homeTeamLongName = homeTeamLongname;
    this.homeTeamShortName = homeTeamShortname;
    this.homeTeamScore = homeTeamScore;
    this.awayTeamId = awayTeamId;
    this.awayTeamLongName = awayTeamLongname;
    this.awayTeamShortName = awayTeamShortname;
    this.awayTeamScore = awayTeamScore;
  }
}
