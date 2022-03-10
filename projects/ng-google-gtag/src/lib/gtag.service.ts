import { Injectable } from '@angular/core';
import { GtagConfig } from './gtag.module';

@Injectable()
export class GtagService {

  public createGtagEntryPoint({ gtagMeasurementId, enableDebugLog, deferScript }: GtagConfig): void {
    // register google tag manager
    const gTagManagerScript = document.createElement('script');
    gTagManagerScript.async = true;

    if (deferScript) {
      gTagManagerScript.defer = true;
    }

    gTagManagerScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtagMeasurementId}`;
    document.head.appendChild(gTagManagerScript);

    // register Google Analytics
    const gaScript = document.createElement('script');
    gaScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${gtagMeasurementId}', { 'anonymize_ip': true });
    `;
    document.head.appendChild(gaScript);

    if (enableDebugLog) {
      console.log(`[GtagService] initialized gtag with id: ${gtagMeasurementId}`)
    }
  }
}
