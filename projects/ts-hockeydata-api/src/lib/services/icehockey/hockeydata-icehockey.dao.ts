import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HockeyDataDAO } from '../hockeydata.dao';
import { HockeyDataApiConfig } from '../../model/types';
import { ICEHOCKEY_API_CONFIG } from '../../tokens';

@Injectable({ providedIn: 'root' })
export class HockeyDataIceHockeyDAO extends HockeyDataDAO {
  public constructor(@Inject(ICEHOCKEY_API_CONFIG) apiConfig: HockeyDataApiConfig,
                     protected httpClient: HttpClient) {
    super('ebel', apiConfig, httpClient);
  }
}
