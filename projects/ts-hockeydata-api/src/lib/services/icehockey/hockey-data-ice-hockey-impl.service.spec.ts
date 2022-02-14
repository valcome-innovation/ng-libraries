import { TestBed } from '@angular/core/testing';
import { HockeyDataApiModule } from '../../hockeydata-api.module';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { getGameReportData } from '../../mapper/test-data/game-report-data';
import { getTeamStandings } from '../../mapper/test-data/team-standings-data';
import { HockeyDataTeamStanding } from '../../model/hockeydata-team-standing';
import { HockeyDataGameReport } from '../../model/hockeydata-gamereport';
import { getKnockoutStageData } from '../../mapper/test-data/knockout-stage-data';
import { HockeyDataKnockoutStage } from '../../model/hockeydata-knockout-stage';
import { HockeyDataKnockoutPhase } from '../../model/hockeydata-knockout-phase';
import { HockeyDataKnockoutEncounter } from '../../model/hockeydata-knockout-encounter';
import { HockeyDataKnockoutTeamScore } from '../../model/hockeydata-knockout-team-score';
import { HockeyDataScheduledGame } from '../../model/hockeydata-scheduled-game';
import { HockeyDataGameScore } from '../../model/hockeydata-game-score';
import { HockeyDataIceHockeyServiceImpl } from './hockey-data-ice-hockey-impl.service';
import { HockeyDataIceHockeyService } from './contracts/hockey-data-ice-hockey.service';
import { ICEHOCKEY_API_CONFIG } from '../../tokens';
import createSpy = jasmine.createSpy;

describe('HockeyDataIceHockeyServiceImpl', () => {

  let service: HockeyDataIceHockeyService;
  const jsonpMock = createSpy('getMock');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HockeyDataApiModule
      ],
      providers: [
        { provide: HttpClient, useValue: { jsonp: jsonpMock } },
        { provide: ICEHOCKEY_API_CONFIG, useValue: { apiKey: 'apiKey', referer: 'referer' } }
      ],
    });

    service = TestBed.inject(HockeyDataIceHockeyService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should return game report data', async () => {
    jsonpMock.and.returnValue(of(getGameReportData()));

    const gameReport = (await service.getGameReport('gameId'))!;

    expect(gameReport).toBeInstanceOf(HockeyDataGameReport);
    expect(gameReport.gameData).toBeDefined();
    expect(gameReport.gameData.generalData).toBeDefined();
    expect(gameReport.gameData.liveData).toBeDefined();
    expect(gameReport.gameData.periodData).toBeDefined();
    expect(gameReport.gameData.location).toBeDefined();
    expect(gameReport.gameData.schedule).toBeDefined();
    expect(gameReport.gameData.teamScores).toBeDefined();
  });

  it('should return team standings data', async () => {
    jsonpMock.and.returnValue(of(getTeamStandings()));

    const teamStandings = await service.getStandings(1234, true);

    expect(teamStandings).toBeInstanceOf(Array);
    expect(teamStandings?.every(ts => ts instanceof HockeyDataTeamStanding)).toEqual(true);
    teamStandings?.forEach(standing => {
      expect(standing.teamId).toBeDefined();
      expect(standing.teamShortname).toBeDefined();
      expect(standing.teamLongname).toBeDefined();
      expect(standing.gamesWonInOt).toBeDefined();
      expect(standing.gamesWon).toBeDefined();
      expect(standing.gamesLost).toBeDefined();
      expect(standing.gamesLostInOt).toBeDefined();
      expect(standing.gamesTied).toBeDefined();
      expect(standing.goalsFor).toBeDefined();
      expect(standing.goalsAgainst).toBeDefined();
      expect(standing.goalsForPerGame).toBeDefined();
      expect(standing.points).toBeDefined();
      expect(standing.pointsPerGame).toBeDefined();
      expect(standing.bonusPoints).toBeDefined();
      expect(standing.rankImprovement).toBeDefined();
      expect(standing.rank).toBeDefined();
      expect(standing.goalDifference).toBeDefined();
      expect(standing.goalDifferencePerGame).toBeDefined();
    });
  });

  it('should return knockout stage', async () => {
    const data = getKnockoutStageData();
    jsonpMock.and.returnValue(of(data));

    const knockoutStage = (await service.getKnockoutStage(1234))!;

    expect(knockoutStage).toBeInstanceOf(HockeyDataKnockoutStage);
    expect(knockoutStage.divisionName).toEqual(data.data.divisionName);
    expect(knockoutStage.divisionId).toEqual(data.data.divisionId);

    knockoutStage.phases.forEach(phase => {
      expect(phase).toBeInstanceOf(HockeyDataKnockoutPhase);
      expect(phase.name).toBeDefined();

      phase.encounters.forEach(encounter => {
        expect(encounter).toBeInstanceOf(HockeyDataKnockoutEncounter);
        expect(encounter.gamesNeeded).toBeDefined();
        expect(encounter.bestOf).toBeDefined();
        expect(encounter.isDecided).toBeDefined();

        encounter.teamScores.forEach(score => {
          expect(score).toBeInstanceOf(HockeyDataKnockoutTeamScore);
          expect(score.teamId).toBeDefined();
          expect(score.shortName).toBeDefined();
          expect(score.longName).toBeDefined();
          expect(score.gamesWon).toBeDefined();
        });

        encounter.games.forEach(game => {
          expect(game).toBeInstanceOf(HockeyDataScheduledGame);
          expect(game.isLive).toBeDefined();
          expect(game.isShootOut).toBeDefined();
          expect(game.date).toBeDefined();
          expect(game.isOvertime).toBeDefined();
          expect(game.hasEnded).toBeDefined();
          expect(game.gameName).toBeDefined();
          expect(game.gameId).toBeDefined();
          expect(game.teamScores).toBeInstanceOf(HockeyDataGameScore);
        });
      });
    });
  });
});
