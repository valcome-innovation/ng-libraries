import { TestBed } from '@angular/core/testing';
import { HockeyDataGameDataMapper } from './hockeydata-gamedata.mapper';

describe('HockeyDataGameDataMapper', () => {

  let mapper: HockeyDataGameDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataGameDataMapper]
    });

    mapper = TestBed.inject(HockeyDataGameDataMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });
});
