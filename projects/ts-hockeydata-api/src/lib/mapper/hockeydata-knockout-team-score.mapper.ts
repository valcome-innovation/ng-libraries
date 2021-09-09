import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { IHockeyDataPhaseEncounterTeam } from '../model/types';
import { HockeyDataKnockoutTeamScore, ScoreResult } from '../model/hockeydata-knockout-team-score';
import { HockeyDataScheduledGame } from '../model/hockeydata-scheduled-game';

@Injectable({ providedIn: 'root' })
export class HockeyDataKnockoutTeamScoreMapper extends BaseMapper<HockeyDataKnockoutTeamScore> {
  public constructor() {
    super(HockeyDataKnockoutTeamScore);
  }

  public fromJson(json: Partial<IHockeyDataPhaseEncounterTeam>): HockeyDataKnockoutTeamScore {
    const teamId = this.getValidated(json.id);
    const longName = this.getValidated(json.longname);
    const shortName = this.getValidated(json.shortname);
    const gamesWon = this.getValidated(json.gamesWon);
    return new HockeyDataKnockoutTeamScore(teamId, longName, shortName, gamesWon);
  }

  public mapScoreResults(teamScores: HockeyDataKnockoutTeamScore[], games: HockeyDataScheduledGame[]): void {
    teamScores.forEach(teamScore => {
      const scoreResults = this.getTeamScoreResults(teamScore.shortName, games);
      teamScore.results = [...scoreResults];
    });
  }

  private getTeamScoreResults(teamShortName: string, games: HockeyDataScheduledGame[]): ScoreResult[] {
    return games.map(game => this.determineScoreResult(teamShortName, game));
  }

  private determineScoreResult(teamShortName: string, game: HockeyDataScheduledGame): ScoreResult {
    if (game.isScheduled()) {
      return 'scheduled';
    } else if (game.isLive) {
      return 'live';
    } else if (game.hasWon(teamShortName)) {
      return 'won';
    } else {
      return 'lost';
    }
  }
}
