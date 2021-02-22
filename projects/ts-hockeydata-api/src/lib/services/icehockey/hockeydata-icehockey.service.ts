import { Injectable } from '@angular/core';
import { HockeyDataService } from '../hockeydata.service';
import { HockeyDataIceHockeyDAO } from './hockeydata-icehockey.dao';
import { HockeyDataGameReportMapper } from '../../mapper/hockeydata-gamereport.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataIceHockeyService extends HockeyDataService {

  public constructor(protected hockeyDataIceHockeyDAO: HockeyDataIceHockeyDAO,
                     protected gameReportMapper: HockeyDataGameReportMapper) {
    super(hockeyDataIceHockeyDAO, gameReportMapper);
  }

}
