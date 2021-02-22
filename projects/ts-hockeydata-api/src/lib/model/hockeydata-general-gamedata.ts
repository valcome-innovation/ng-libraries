export class HockeyDataGeneralGameData {
  public gameId: string;
  public divisionId: number;
  public divisionLongname: string;
  public gameName: string;
  public gameRound: number;

  public constructor(gameId: string, divisionId: number, divisionLongname: string, gameName: string, gameRound: number) {
    this.gameId = gameId;
    this.divisionId = divisionId;
    this.divisionLongname = divisionLongname;
    this.gameName = gameName;
    this.gameRound = gameRound;
  }
}
