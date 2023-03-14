import { Injectable } from '@angular/core';
import { DomUtils, RenderService } from '@valcome/ng-core';
import { GtagConfig, GtagConsent } from './gtag.module';

declare const gtag: any;

@Injectable()
export class GtagService {

  private initializeResolve!: (value: unknown) => void;
  private initialize$ = new Promise(resolve => this.initializeResolve = resolve);

  public constructor(private renderService: RenderService) {
  }

  public async createGtagEntryPoint(config: GtagConfig): Promise<void> {
    const {
      gtagMeasurementId,
      enableDebugLog,
      deferScript,
      defaultConsent,
      anonymizeIp
    } = config;

    if (this.renderService.isBrowser()) {
      const manager = DomUtils.loadScriptAsync(
        'gTag',
        `https://googletagmanager.com/gtag/js?id=${gtagMeasurementId}`,
        'src',
        deferScript
      );

      const registration = DomUtils.loadScriptAsync(
        'gTagRegistration',
        `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config',
        '${gtagMeasurementId}',
        { 'anonymize_ip': ${anonymizeIp} }
      );
      gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied'
      });
      `,
        'plainScript',
        false
      );

      Promise.all([manager, registration])
        .then((value) => this.initializeResolve(value));

      await this.initialize$;

      this.updateUserConsent(defaultConsent);

      if (enableDebugLog) {
        console.log(`[GtagService] initialized gtag with id: ${gtagMeasurementId}`);
      }
    }
  }

  public updateUserConsent(userConsent: GtagConsent): void {
    if (userConsent === 'GRANTED') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted'
      });
      gtag('config', 'GA_MEASUREMENT_ID', {
        cookie_flags: 'max-age=7200;secure;samesite=none',
        update: true
      });
    } else {
      gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied'
      });
      gtag('config', 'GA_MEASUREMENT_ID', {
        cookie_flags: 'max-age=0;secure;samesite=none',
        update: true
      });
    }
  }
}
