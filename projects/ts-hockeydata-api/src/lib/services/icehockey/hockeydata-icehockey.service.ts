import { Injectable } from '@angular/core';
import { HockeyDataService } from '../hockeydata.service';
import { HockeyDataIceHockeyDAO } from './hockeydata-icehockey.dao';

@Injectable({ providedIn: 'root' })
export class HockeyDataIceHockeyService extends HockeyDataService {

  public constructor(private hockeyDataIceHockeyDAO: HockeyDataIceHockeyDAO) {
    super(hockeyDataIceHockeyDAO);
  }

}
