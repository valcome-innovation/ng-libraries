import { HockeyDataGameScore } from './hockeydata-game-score';

export class HockeyDataKnockoutGame {
  public gameId: string;
  public gameName: string;
  public gameRound?: number;
  public date: Date;
  public isOvertime: boolean;
  public isShootOut: boolean;
  public isLive: boolean;
  public hasEnded: boolean;
  public teamScores: HockeyDataGameScore;

  public constructor(gameId: string,
                     gameName: string,
                     gameRound: number | undefined,
                     date: Date,
                     isOvertime: boolean,
                     isShootOut: boolean,
                     isLive: boolean,
                     hasEnded: boolean,
                     teamScores: HockeyDataGameScore) {
    this.gameId = gameId;
    this.gameName = gameName;
    this.gameRound = gameRound;
    this.date = date;
    this.isOvertime = isOvertime;
    this.isShootOut = isShootOut;
    this.isLive = isLive;
    this.hasEnded = hasEnded;
    this.teamScores = teamScores;
  }

  public isScheduled(): boolean {
    return !this.isLive && !this.hasEnded;
  }

  public hasWon(teamShortName: string): boolean {
    const homeTeamWon = this.teamScores.homeTeamShortName === teamShortName
      && this.teamScores.homeTeamScore > this.teamScores.awayTeamScore;

    const awayTeamWon = this.teamScores.awayTeamShortName === teamShortName
      && this.teamScores.awayTeamScore > this.teamScores.homeTeamScore;

    return this.hasEnded && homeTeamWon || awayTeamWon;
  }
}
