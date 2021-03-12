import { HockeyDataKnockoutGame } from './hockeydata-knockout-game';
import { HockeyDataGameScore } from './hockeydata-game-score';

describe('HockeyDataKnockoutGame', () => {

  let game: HockeyDataKnockoutGame;
  const homeTeam = 'SWL';
  const awayTeam = 'HKO';

  beforeEach(() => {
    game = new HockeyDataKnockoutGame(
      'gameId', 'gameName', 50, new Date(), false, false, false, false,
      new HockeyDataGameScore(
        10, 'Home', homeTeam, 0,
        20, 'Away', awayTeam, 0
      )
    );
  });

  it('should be scheduled', () => {
    game.isLive = false;
    game.hasEnded = false;

    expect(game.isScheduled()).toBeTrue();
  });

  it('should have no winner if game is scheduled', () => {
    game.isLive = false;
    game.hasEnded = false;

    expect(game.isScheduled()).toBeTrue();
    expect(game.hasWon(homeTeam)).toBeFalse();
    expect(game.hasWon(awayTeam)).toBeFalse();
  });

  it('should be live', () => {
    game.isLive = true;

    expect(game.isScheduled()).toBeFalse();
  });

  it('should have no winner if game is live', () => {
    game.isLive = true;

    expect(game.isScheduled()).toBeFalse();
    expect(game.hasWon(homeTeam)).toBeFalse();
    expect(game.hasWon(awayTeam)).toBeFalse();
  });

  it('should have winner if game has ended', () => {
    game.hasEnded = true;
    game.teamScores.awayTeamScore = 2;
    game.teamScores.homeTeamScore = 1;

    expect(game.isScheduled()).toBeFalse();
    expect(game.hasWon(homeTeam)).toBeFalse();
    expect(game.hasWon(awayTeam)).toBeTrue();

    game.teamScores.awayTeamScore = 1;
    game.teamScores.homeTeamScore = 1;

    expect(game.hasWon(homeTeam)).toBeFalse();
    expect(game.hasWon(awayTeam)).toBeFalse();

    game.teamScores.awayTeamScore = 1;
    game.teamScores.homeTeamScore = 2;

    expect(game.hasWon(homeTeam)).toBeTrue();
    expect(game.hasWon(awayTeam)).toBeFalse();
  });
});
