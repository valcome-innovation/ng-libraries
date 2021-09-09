import { HockeyDataKnockoutTeamScore } from './hockeydata-knockout-team-score';
import { HockeyDataScheduledGame } from './hockeydata-scheduled-game';

export class HockeyDataKnockoutEncounter {
  public bestOf: number;
  public gamesNeeded: number;
  public isDecided: boolean;
  public teamScores: [HockeyDataKnockoutTeamScore, HockeyDataKnockoutTeamScore];
  public games: HockeyDataScheduledGame[];
  public labels: any[];

  public constructor(bestOf: number,
                     gamesNeeded: number,
                     isDecided: boolean,
                     teamScores: [HockeyDataKnockoutTeamScore, HockeyDataKnockoutTeamScore],
                     games: HockeyDataScheduledGame[] = [],
                     labels: any[] = []) {
    this.bestOf = bestOf;
    this.gamesNeeded = gamesNeeded;
    this.isDecided = isDecided;
    this.teamScores = teamScores;
    this.games = games;
    this.labels = labels;
  }
}
