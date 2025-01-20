import { Injectable } from '@angular/core';
import { ExtraLoggingData, Logger } from '@valcome/ng-logging';
import { captureException, captureMessage } from '@sentry/angular';

@Injectable()
export class SentryLogger
  implements Logger {

  public info(message: string, extra?: ExtraLoggingData): string {
    return captureMessage(
      message,
      { level: 'info', contexts: { additionalInfo: extra } }
    );
  }

  public log(message: string, extra?: ExtraLoggingData): string {
    return captureMessage(
      message,
      { level: 'log', contexts: { additionalInfo: extra } }
    );
  }

  public warn(message: string, extra?: ExtraLoggingData): string {
    return captureMessage(
      message,
      { level: 'warning', contexts: { additionalInfo: extra } }
    );
  }

  public error(message: string, extra?: ExtraLoggingData): string {
    return captureMessage(
      message,
      { level: 'error', contexts: { additionalInfo: extra } }
    );
  }

  public exception(exception: any, extra?: ExtraLoggingData): string {
    return captureException(
      exception,
      { level: 'error', contexts: { additionalInfo: extra } }
    );
  }
}
