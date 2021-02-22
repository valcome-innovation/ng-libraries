import { HockeyDataGameData } from './hockeydata-gamedata';

export class HockeyDataGameReport {
  public gameData: HockeyDataGameData;

  public constructor(gameData: HockeyDataGameData) {
    this.gameData = gameData;
  }
}
