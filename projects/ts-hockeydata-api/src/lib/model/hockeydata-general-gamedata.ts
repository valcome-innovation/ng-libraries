export class HockeyDataGeneralGameData {
  public gameId: string;
  public divisionId: number;
  public divisionName: string;
  public gameName: string;
  public gameRound: number;

  public constructor(gameId: string, divisionId: number, divisionName: string, gameName: string, gameRound: number) {
    this.gameId = gameId;
    this.divisionId = divisionId;
    this.divisionName = divisionName;
    this.gameName = gameName;
    this.gameRound = gameRound;
  }
}
