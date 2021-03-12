export type ScoreResult = 'won' | 'lost' | 'live' | 'scheduled';

export class HockeyDataKnockoutTeamScore {
  public teamId: number;
  public longName: string;
  public shortName: string;
  public gamesWon: number;
  public results: ScoreResult[];

  public constructor(teamId: number,
                     longName: string,
                     shortName: string,
                     gamesWon: number,
                     results: ScoreResult[] = []) {
    this.teamId = teamId;
    this.longName = longName;
    this.shortName = shortName;
    this.gamesWon = gamesWon;
    this.results = [...results];
  }
}
