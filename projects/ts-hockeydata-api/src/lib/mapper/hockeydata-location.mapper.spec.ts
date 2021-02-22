import { TestBed } from '@angular/core/testing';
import { HockeyDataLocationMapper } from './hockeydata-location.mapper';
import { HockeyDataLocation } from '../model/hockeydata-location';

describe('HockeyDataLocationMapper', () => {

  let mapper: HockeyDataLocationMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HockeyDataLocationMapper]
    });

    mapper = TestBed.inject(HockeyDataLocationMapper);
  });

  it('should create', () => {
    expect(mapper).toBeDefined();
  });

  it('should map location data', () => {
    const data: any = {
      location: {
        shortname: 'Pranives Wolkenstein',
        longname: 'Wolkenstein',
        coordinates: {
          lat: 1,
          lng: 2
        }
      }
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataLocation);
    expect(result.shortName).toEqual(data.location.shortname);
    expect(result.longName).toEqual(data.location.longname);
    expect(result.lat).toEqual(data.location.coordinates.lat);
    expect(result.lng).toEqual(data.location.coordinates.lng);
  });

  it('should map location data without coordinates', () => {
    const data: any = {
      location: {
        shortname: 'Pranives Wolkenstein',
        longname: 'Wolkenstein',
      }
    };

    const result = mapper.fromJson(data);

    expect(result).toBeInstanceOf(HockeyDataLocation);
    expect(result.shortName).toEqual(data.location.shortname);
    expect(result.longName).toEqual(data.location.longname);
    expect(result.lat).toBeUndefined();
    expect(result.lng).toBeUndefined();
  });

  it('should fail mapping on missing data', () => {
    const data: any = {
      location: {
        shortname: 'Pranives Wolkenstein',
      }
    };

    expect(() => mapper.fromJson(data)).toThrowError();
  });
});
