import { TestBed } from '@angular/core/testing';
import { HockeyDataIceHockeyService } from './hockeydata-icehockey.service';
import { HockeyDataApiModule } from '../../hockeydata-api.module';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { getGameReportData } from '../../mapper/game-report-data';
import createSpy = jasmine.createSpy;

describe('HockeyDataIcehockeyService', () => {

  let service: HockeyDataIceHockeyService;
  const getMock = createSpy('getMock');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HockeyDataApiModule.forRoot('iceApiKey')
      ],
      providers: [
        { provide: HttpClient, useValue: { get: getMock } }
      ],
    });

    service = TestBed.inject(HockeyDataIceHockeyService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });

  it('should return game report data', async () => {
    getMock.and.returnValue(of(getGameReportData()));

    const gameReport = await service.getGameReport('gameId');

    expect(gameReport).toBeDefined();
    expect(gameReport.gameData).toBeDefined();
    expect(gameReport.gameData.generalData).toBeDefined();
    expect(gameReport.gameData.liveData).toBeDefined();
    expect(gameReport.gameData.periodData).toBeDefined();
    expect(gameReport.gameData.location).toBeDefined();
    expect(gameReport.gameData.schedule).toBeDefined();
    expect(gameReport.gameData.teamScores).toBeDefined();
  });
});
