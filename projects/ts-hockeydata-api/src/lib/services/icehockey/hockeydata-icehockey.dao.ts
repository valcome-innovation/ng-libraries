import { Inject, Injectable } from '@angular/core';
import { HockeyDataDAO } from '../hockeydata.dao';
import { ICEHOCKEY_API_KEY } from '../../hockeydata-api.module';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HockeyDataIceHockeyDAO extends HockeyDataDAO {
  public constructor(@Inject(ICEHOCKEY_API_KEY) apiKey: string,
                     protected httpClient: HttpClient) {
    super('ebel', apiKey, httpClient);
  }
}
