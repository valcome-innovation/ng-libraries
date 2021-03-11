export class HockeyDataKnockoutTeamScore {
  public teamId: number;
  public longName: string;
  public shortName: string;
  public gamesWon: number;

  public constructor(teamId: number,
                     longName: string,
                     shortName: string,
                     gamesWon: number) {
    this.teamId = teamId;
    this.longName = longName;
    this.shortName = shortName;
    this.gamesWon = gamesWon;
  }
}
