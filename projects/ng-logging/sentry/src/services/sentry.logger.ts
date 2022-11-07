import * as Sentry from '@sentry/angular';
import { Injectable } from '@angular/core';
import { ExtraLoggingData, Logger } from '@valcome/ng-logging';

@Injectable()
export class SentryLogger implements Logger {

  public info(message: string, extra?: ExtraLoggingData): void {
    Sentry.captureMessage(message, { level: 'info', contexts: extra });
  }

  public log(message: string, extra?: ExtraLoggingData): void {
    Sentry.captureMessage(message, { level: 'log', contexts: extra });
  }

  public warn(message: string, extra?: ExtraLoggingData): void {
    Sentry.captureMessage(message, { level: 'warning', contexts: extra });
  }

  public error(message: string, extra?: ExtraLoggingData): void {
    Sentry.captureMessage(message, { level: 'error', contexts: extra });
  }

  public exception(exception: any, extra?: ExtraLoggingData): void {
    Sentry.captureException(exception, { level: 'error', contexts: extra });
  }
}
