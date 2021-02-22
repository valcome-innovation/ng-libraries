import { TestBed } from '@angular/core/testing';
import { HockeyDataGameReportMapper } from './hockeydata-gamereport.mapper';

describe('HockeyDataGameReportMapper', () => {

  let mapper: HockeyDataGameReportMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataGameReportMapper]
    });

    mapper = TestBed.inject(HockeyDataGameReportMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });
});
