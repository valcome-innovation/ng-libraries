import { TestBed } from '@angular/core/testing';
import { HockeyDataService } from './hockeydata.service';
import { HockeyDataGameReportMapper } from '../mapper/hockeydata-gamereport.mapper';
import { Injectable } from '@angular/core';
import { HockeyDataDAO } from './hockeydata.dao';
import { HockeyDataTeamStandingMapper } from '../mapper/hockeydata-team-standing.mapper';

@Injectable()
class TestService extends HockeyDataService {
  public constructor(dao: HockeyDataDAO,
                     gameReportMapper: HockeyDataGameReportMapper,
                     teamStandingMapper: HockeyDataTeamStandingMapper) {
    super(dao, gameReportMapper, teamStandingMapper);
  }
}

describe('HockeyDataService', () => {

  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestService,
        { provide: HockeyDataDAO, useValue: {} },
        { provide: HockeyDataGameReportMapper, useValue: {} },
        { provide: HockeyDataTeamStandingMapper, useValue: {} }
      ]
    });

    service = TestBed.inject(TestService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
