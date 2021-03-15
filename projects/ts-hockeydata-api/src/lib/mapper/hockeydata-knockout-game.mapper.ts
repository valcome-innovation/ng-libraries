import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { HockeyDataKnockoutGame } from '../model/hockeydata-knockout-game';
import { IHockeyDataKnockoutPhaseGame } from '../model/types';
import { HockeyDataGameScoreMapper } from './hockeydata-game-score.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataKnockoutGameMapper extends BaseMapper<HockeyDataKnockoutGame> {
  public constructor(private hockeyDataGameScoreMapper: HockeyDataGameScoreMapper) {
    super(HockeyDataKnockoutGame);
  }

  public fromJson(json: Partial<IHockeyDataKnockoutPhaseGame>): HockeyDataKnockoutGame {
    const gameId = this.getValidated(json.id);
    const gameName = this.getValidated(json.gameName);
    const gameRound = json.gameRound ?? undefined;
    const date = new Date(this.getValidated(json.gameUtcTimestamp));
    const isOvertime = this.getValidated(json.isOvertime);
    const isShootOut = this.getValidated(json.isShootOut);
    const hasEnded = this.hasEnded(json);
    const isLive = this.getValidated(json.liveTime) > 0 && !hasEnded;
    const teamScores = this.hockeyDataGameScoreMapper.fromJson(json);

    return new HockeyDataKnockoutGame(
      gameId, gameName, gameRound, date, isOvertime, isShootOut, isLive, hasEnded, teamScores
    );
  }

  private hasEnded(json: Partial<IHockeyDataKnockoutPhaseGame>): boolean {
    return this.getValidated(json.gameHasEnded) || this.getValidated<string[]>(json.labels).includes('FINISHED');
  }
}
