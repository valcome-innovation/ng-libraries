import { TestBed } from '@angular/core/testing';
import { HockeyDataLiveGameDataMapper } from './hockeydata-live-gamedata.mapper';
import { HockeyDataLiveGameData } from '../model/hockeydata-live-gamedata';

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

  it('should map hockeydata live game data', () => {
    const data: any = {
      liveTime: 3245,
      liveTimeFormatted: '52:17',
      liveTimePeriod: '3'
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataLiveGameData);
    expect(result.liveTime).toEqual(data.liveTime);
    expect(result.liveTimeFormatted).toEqual(data.liveTimeFormatted);
    expect(result.liveTimePeriod).toEqual(data.liveTimePeriod);
  });

  it('should fail mapping on missing data', () => {
    const data: any = {
      liveTimeFormatted: '52:17',
      liveTimePeriod: '3'
    };

    expect(() => mapper.fromJson(data)).toThrowError();
  });
});
