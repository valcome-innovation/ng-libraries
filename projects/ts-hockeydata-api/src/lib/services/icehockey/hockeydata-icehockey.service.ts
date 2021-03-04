import { Injectable } from '@angular/core';
import { HockeyDataService } from '../hockeydata.service';
import { HockeyDataIceHockeyDAO } from './hockeydata-icehockey.dao';
import { HockeyDataGameReportMapper } from '../../mapper/hockeydata-gamereport.mapper';
import { HockeyDataTeamStandingMapper } from '../../mapper/hockeydata-team-standing.mapper';

@Injectable({ providedIn: 'root' })
export class HockeyDataIceHockeyService extends HockeyDataService {

  public constructor(protected hockeyDataIceHockeyDAO: HockeyDataIceHockeyDAO,
                     protected gameReportMapper: HockeyDataGameReportMapper,
                     protected teamStandingMapper: HockeyDataTeamStandingMapper) {
    super(hockeyDataIceHockeyDAO, gameReportMapper, teamStandingMapper);
  }
}
