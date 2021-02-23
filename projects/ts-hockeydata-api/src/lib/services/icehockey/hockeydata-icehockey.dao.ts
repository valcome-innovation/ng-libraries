import { Inject, Injectable } from '@angular/core';
import { HockeyDataDAO } from '../hockeydata.dao';
import { ICEHOCKEY_API_CONFIG } from '../../hockeydata-api.module';
import { HttpClient } from '@angular/common/http';
import { HockeyDataApiConfig } from '../../model/types';

@Injectable({ providedIn: 'root' })
export class HockeyDataIceHockeyDAO extends HockeyDataDAO {
  public constructor(@Inject(ICEHOCKEY_API_CONFIG) apiConfig: HockeyDataApiConfig,
                     protected httpClient: HttpClient) {
    super('ebel', apiConfig, httpClient);
  }
}
