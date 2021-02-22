import { TestBed } from '@angular/core/testing';
import { HockeyDataService } from './hockeydata.service';
import { HockeyDataGameReportMapper } from '../mapper/hockeydata-gamereport.mapper';
import { Injectable } from '@angular/core';
import { HockeyDataDAO } from './hockeydata.dao';

@Injectable()
class TestService extends HockeyDataService {
  public constructor(dao: HockeyDataDAO,
                     mapper: HockeyDataGameReportMapper) {
    super(dao, mapper);
  }
}

describe('HockeyDataService', () => {

  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestService,
        { provide: HockeyDataDAO, useValue: {} },
        { provide: HockeyDataGameReportMapper, useValue: {} }
      ]
    });

    service = TestBed.inject(TestService);
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
