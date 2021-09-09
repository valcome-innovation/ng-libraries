import { HockeyDataScheduledGame } from './hockeydata-scheduled-game';

export class HockeyDataSchedule {
  public games: HockeyDataScheduledGame[];

  public constructor(games: HockeyDataScheduledGame[] = []) {
    this.games = [...games];
  }
}
