import { TestBed } from '@angular/core/testing';
import { HockeyDataLiveGameDataMapper } from './hockeydata-live-gamedata.mapper';

describe('HockeyDataLiveGameDataMapper', () => {

  let mapper: HockeyDataLiveGameDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataLiveGameDataMapper]
    });

    mapper = TestBed.inject(HockeyDataLiveGameDataMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });
});
