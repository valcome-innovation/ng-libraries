import { HockeyDataKnockoutTeamScore } from './hockeydata-knockout-team-score';
import { HockeyDataKnockoutGame } from './hockeydata-knockout-game';

export class HockeyDataKnockoutEncounter {
  public bestOf: number;
  public gamesNeeded: number;
  public isDecided: boolean;
  public teamScores: [HockeyDataKnockoutTeamScore, HockeyDataKnockoutTeamScore];
  public games: HockeyDataKnockoutGame[];
  public labels: any[];

  public constructor(bestOf: number,
                     gamesNeeded: number,
                     isDecided: boolean,
                     teamScores: [HockeyDataKnockoutTeamScore, HockeyDataKnockoutTeamScore],
                     games: HockeyDataKnockoutGame[] = [],
                     labels: any[] = []) {
    this.bestOf = bestOf;
    this.gamesNeeded = gamesNeeded;
    this.isDecided = isDecided;
    this.teamScores = teamScores;
    this.games = games;
    this.labels = labels;
  }
}
