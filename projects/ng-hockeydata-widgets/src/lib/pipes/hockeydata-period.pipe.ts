import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'period' })
export class HockeydataPeriodPipe implements PipeTransform {

  public transform(value: string, ...args: any[]): any {
    if (!value || isNaN(Number(value))) {
      return value;
    } else {
      return this.getNumberPeriod(value);
    }
  }

  private getNumberPeriod(value: string): string {
    switch (value) {
      case '1':
        return '1st';
      case '2':
        return '2nd';
      case '3':
        return '3rd';
      default:
        return `${value}th`;
    }
  }
}
