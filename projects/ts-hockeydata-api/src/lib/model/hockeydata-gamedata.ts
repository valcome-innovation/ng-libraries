import { HockeyDataLocation } from './hockeydata-location';
import { HockeyDataGameScore } from './hockeydata-game-score';
import { HockeyDataGeneralGameData } from './hockeydata-general-gamedata';
import { HockeyDataGameDataSchedule } from './hockeydata-gamedata-schedule';
import { HockeyDataPeriodGameData } from './hockeydata-period-gamedata';
import { HockeyDataLiveGameData } from './hockeydata-live-gamedata';

export class HockeyDataGameData {
  public generalData: HockeyDataGeneralGameData;
  public schedule: HockeyDataGameDataSchedule;
  public location: HockeyDataLocation;
  public teamScores: HockeyDataGameScore;
  public liveData: HockeyDataLiveGameData;
  public periodData: HockeyDataPeriodGameData;

  public constructor(generalData: HockeyDataGeneralGameData,
                     schedule: HockeyDataGameDataSchedule,
                     teamScores: HockeyDataGameScore,
                     location: HockeyDataLocation,
                     liveData: HockeyDataLiveGameData,
                     periodData: HockeyDataPeriodGameData) {
    this.generalData = generalData;
    this.schedule = schedule;
    this.teamScores = teamScores;
    this.location = location;
    this.liveData = liveData;
    this.periodData = periodData;
  }
}
