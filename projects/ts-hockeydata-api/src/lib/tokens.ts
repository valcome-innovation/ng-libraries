import { InjectionToken } from '@angular/core';
import { HockeyDataApiConfig } from './model/types';

export const ICEHOCKEY_API_CONFIG = new InjectionToken<HockeyDataApiConfig>('icehockeyApiKey');
export const FOOTBALL_API_CONFIG = new InjectionToken<HockeyDataApiConfig>('footballApiKey');
