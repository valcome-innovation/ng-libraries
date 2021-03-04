import { TestBed } from '@angular/core/testing';
import { HockeyDataIceHockeyService } from './hockeydata-icehockey.service';
import { HockeyDataApiModule } from '../../hockeydata-api.module';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { getGameReportData } from '../../mapper/test-data/game-report-data';
import { getTeamStandings } from '../../mapper/test-data/team-standings-data';
import { HockeyDataTeamStanding } from '../../model/hockeydata-team-standing';
import { HockeyDataGameReport } from '../../model/hockeydata-gamereport';
import createSpy = jasmine.createSpy;

describe('HockeyDataIcehockeyService', () => {

  let service: HockeyDataIceHockeyService;
  const jsonpMock = createSpy('getMock');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HockeyDataApiModule.forRoot({ apiKey: 'apiKey', referer: 'referer' })
      ],
      providers: [
        { provide: HttpClient, useValue: { jsonp: jsonpMock } }
      ],
    });

    service = TestBed.inject(HockeyDataIceHockeyService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should return game report data', async () => {
    jsonpMock.and.returnValue(of(getGameReportData()));

    const gameReport = await service.getGameReport('gameId');

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
    expect(teamStandings.every(ts => ts instanceof HockeyDataTeamStanding)).toEqual(true);
    teamStandings.forEach(standing => {
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
});
