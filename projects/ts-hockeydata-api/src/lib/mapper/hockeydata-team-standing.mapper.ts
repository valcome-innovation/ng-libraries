import { BaseMapper } from '@valcome/ts-core';
import { Injectable } from '@angular/core';
import { IHockeyDataTeamStanding } from '../model/types';
import { HockeyDataTeamStanding } from '../model/hockeydata-team-standing';

@Injectable({ providedIn: 'root' })
export class HockeyDataTeamStandingMapper extends BaseMapper<HockeyDataTeamStanding> {

  public constructor() {
    super(HockeyDataTeamStanding);
  }

  public fromJson(json: Partial<IHockeyDataTeamStanding>): HockeyDataTeamStanding {
    const teamId = this.getValidated(json.id);
    const rank = this.getValidated(json.tableRank);
    const rankImprovement = this.getValidated(json.tableRankImprovement);
    const teamLongname = this.getValidated(json.teamLongname);
    const teamShortname = this.getValidated(json.teamShortname);
    const gamesPlayed = this.getValidated(json.gamesPlayed);
    const gamesWon = this.getValidated(json.gamesWon);
    const gamesWonInOt = this.getValidated(json.gamesWonInOt);
    const gamesTied = this.getValidated(json.gamesTied);
    const gamesLost = this.getValidated(json.gamesLost);
    const gamesLostInOt = this.getValidated(json.gamesLostInOt);
    const goalsFor = this.getValidated(json.goalsFor);
    const goalsAgainst = this.getValidated(json.goalsAgainst);
    const goalDifference = this.getValidated(json.goalDifference);
    const points = this.getValidated(json.points);
    const bonusPoints = this.getValidated(json.bonusPoints);
    const pointsPerGame = this.getValidated(json.pointsPerGame);
    const goalsForPerGame = this.getValidated(json.goalsForPerGame);
    const goalDifferencePerGame = this.getValidated(json.goalDifferencePerGame);
    const gamesPlayedPercentage = this.getValidated(json.gamesPlayedPercentage);
    const isLive = this.mapIsLiveFromLabels(json);

    return new HockeyDataTeamStanding(
      teamId,
      rank,
      rankImprovement,
      teamLongname,
      teamShortname,
      gamesPlayed,
      gamesWon,
      gamesWonInOt,
      gamesTied,
      gamesLost,
      gamesLostInOt,
      goalsFor,
      goalsAgainst,
      goalDifference,
      points,
      bonusPoints,
      pointsPerGame,
      goalsForPerGame,
      goalDifferencePerGame,
      gamesPlayedPercentage,
      isLive
    );
  }

  private mapIsLiveFromLabels(json: Partial<IHockeyDataTeamStanding>): boolean {
    const labels = this.getValidated(json.labels);
    return labels.includes('LIVE');
  }
}
