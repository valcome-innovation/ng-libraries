/* tslint:disable:no-console */
import { ExtraLoggingData, Logger } from './logger';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleLogger implements Logger {

  public info(message: string, extra?: ExtraLoggingData): void {
    console.info(message);

    if (extra) {
      console.info(JSON.stringify(extra));
    }
  }

  public log(message: string, extra?: ExtraLoggingData): void {
    console.log(message);

    if (extra) {
      console.log(JSON.stringify(extra));
    }
  }

  public warn(message: string, extra?: ExtraLoggingData): void {
    console.warn(message);

    if (extra) {
      console.warn(JSON.stringify(extra));
    }
  }

  public error(message: string, extra?: ExtraLoggingData): void {
    console.error(message);

    if (extra) {
      console.error(JSON.stringify(extra));
    }
  }

  public exception(error: any, extra?: ExtraLoggingData): void {
    console.error(error);

    if (extra) {
      console.error(JSON.stringify(extra));
    }
  }
}
