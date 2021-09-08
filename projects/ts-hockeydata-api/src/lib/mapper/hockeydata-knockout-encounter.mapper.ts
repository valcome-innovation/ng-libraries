import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { HockeyDataKnockoutEncounter } from '../model/hockeydata-knockout-encounter';
import { IHockeyDataPhaseEncounter } from '../model/types';
import { HockeyDataScheduledGameMapper } from './hockeydata-scheduled-game-mapper';
import { HockeyDataKnockoutTeamScoreMapper } from './hockeydata-knockout-team-score.mapper';
import { HockeyDataKnockoutTeamScore } from '../model/hockeydata-knockout-team-score';

@Injectable({ providedIn: 'root' })
export class HockeyDataKnockoutEncounterMapper extends BaseMapper<HockeyDataKnockoutEncounter> {
  public constructor(private scheduledGameMapper: HockeyDataScheduledGameMapper,
                     private knockoutTeamScoreMapper: HockeyDataKnockoutTeamScoreMapper) {
    super(HockeyDataKnockoutEncounter);
  }

  public fromJson(json: Partial<IHockeyDataPhaseEncounter>): HockeyDataKnockoutEncounter {
    const bestOf = this.getValidated(json.bestOf);
    const gamesNeeded = this.getValidated(json.gamesNeeded);
    const isDecided = this.getValidated(json.isDecided);
    const labels = this.getValidated(json.labels);
    const games = this.scheduledGameMapper.fromJsonArray(this.getValidated(json.games));
    const teamScores = this.knockoutTeamScoreMapper.fromJsonArray(this.getValidated(json.teams)) as [HockeyDataKnockoutTeamScore, HockeyDataKnockoutTeamScore];
    this.knockoutTeamScoreMapper.mapScoreResults(teamScores, games);

    return new HockeyDataKnockoutEncounter(bestOf, gamesNeeded, isDecided, teamScores, games, labels);
  }
}
