import { TestBed } from '@angular/core/testing';
import { HockeyDataGameDataScheduleMapper } from './hockeydata-gamedata-schedule.mapper';
import { IHockeyDataGameReportGameData } from '../model/types';
import { HockeyDataGameDataSchedule } from '../model/hockeydata-gamedata-schedule';

describe('HockeyDataGameDataScheduleMapper', () => {

  let mapper: HockeyDataGameDataScheduleMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataGameDataScheduleMapper]
    });

    mapper = TestBed.inject(HockeyDataGameDataScheduleMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map schedule data', () => {
    const data = {
      scheduledDate: { timestamp: 1610825400000 },
      scheduledTime: '20:30',
      startTime: '20:29',
      endTime: '22:34',
      isOvertime: 0,
      isShootOut: 0
    } as IHockeyDataGameReportGameData;

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataGameDataSchedule);
    expect(result.scheduledDate).toBeInstanceOf(Date);
    expect(result.scheduledDate).toEqual(new Date(1610825400000));
    expect(result.scheduledTime).toEqual(data.scheduledTime);
    expect(result.startTime).toEqual(data.startTime);
    expect(result.endTime).toEqual(data.endTime);
    expect(result.isOvertime).toEqual(false);
    expect(result.isShootOut).toEqual(false);
  });

  it('should fail mapping on missing data', () => {
    const data: any = {
      scheduledDate: { timestamp: 1610825400000 },
      startTime: '20:29',
      endTime: '22:34',
      isOvertime: 0,
      isShootOut: 0
    };

    expect(() => mapper.fromJson(data as IHockeyDataGameReportGameData)).toThrowError();
  });
});
