import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataLocation } from '../model/hockeydata-location';

export class HockeyDataLocationMapper extends BaseMapper<HockeyDataLocation> {
  public constructor() {
    super(HockeyDataLocation);
  }

  public fromJson(json: Partial<HockeyDataLocation>): HockeyDataLocation {
    return super.fromJson(json);
  }
}
