import { BaseMapper } from '@valcome/ts-core';
import { HockeyDataLocation } from '../model/hockeydata-location';
import { Injectable } from '@angular/core';
import { IHockeyDataGameReportGameData } from '../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataLocationMapper extends BaseMapper<HockeyDataLocation> {
  public constructor() {
    super(HockeyDataLocation);
  }

  public fromJson(json: Partial<IHockeyDataGameReportGameData>): HockeyDataLocation {
    const shortName = this.getValidated(json.location?.shortname);
    const longName = this.getValidated(json.location?.longname);
    const lat = json.location?.coordinates?.lat;
    const lng = json.location?.coordinates?.lng;
    return new HockeyDataLocation(longName, shortName, lat, lng);
  }
}
