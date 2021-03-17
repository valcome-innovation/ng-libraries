import { HockeyDataLabel } from './types';

export class HockeyDataTeamStanding {
  public teamId: number;
  public rank: number;
  public rankImprovement: number;
  public teamLongname: string;
  public teamShortname: string;
  public gamesPlayed: number;
  public gamesWon: number;
  public gamesWonInOt: number;
  public gamesTied: number;
  public gamesLostInOt: number;
  public gamesLost: number;
  public goalsFor: number;
  public goalsAgainst: number;
  public goalDifference: string;
  public points: number;
  public bonusPoints: number;
  public pointsPerGame: number;
  public goalsForPerGame: number;
  public goalDifferencePerGame: number;
  public gamesPlayedPercentage: number;
  public labels: HockeyDataLabel[];

  public constructor(teamId: number,
                     rank: number,
                     rankImprovement: number,
                     teamLongname: string,
                     teamShortname: string,
                     gamesPlayed: number,
                     gamesWon: number,
                     gamesWonInOt: number,
                     gamesTied: number,
                     gamesLost: number,
                     gamesLostInOt: number,
                     goalsFor: number,
                     goalsAgainst: number,
                     goalDifference: string,
                     points: number,
                     bonusPoints: number,
                     pointsPerGame: number,
                     goalsForPerGame: number,
                     goalDifferencePerGame: number,
                     gamesPlayedPercentage: number,
                     labels: HockeyDataLabel[] = []) {
    this.teamId = teamId;
    this.rank = rank;
    this.rankImprovement = rankImprovement;
    this.teamLongname = teamLongname;
    this.teamShortname = teamShortname;
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon;
    this.gamesWonInOt = gamesWonInOt;
    this.gamesTied = gamesTied;
    this.gamesLost = gamesLost;
    this.gamesLostInOt = gamesLostInOt;
    this.goalsFor = goalsFor;
    this.goalsAgainst = goalsAgainst;
    this.goalDifference = goalDifference;
    this.points = points;
    this.bonusPoints = bonusPoints;
    this.pointsPerGame = pointsPerGame;
    this.goalsForPerGame = goalsForPerGame;
    this.goalDifferencePerGame = goalDifferencePerGame;
    this.gamesPlayedPercentage = gamesPlayedPercentage;
    this.labels = [...labels];
  }

  public isLive(): boolean {
    return this.labels.includes('LIVE');
  }
}
