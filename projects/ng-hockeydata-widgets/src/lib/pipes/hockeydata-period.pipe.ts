import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'period' })
export class HockeydataPeriodPipe implements PipeTransform {

  public transform(liveTime: number, periodLength: number): any {
    const period = Math.ceil(liveTime / periodLength);
    switch (period) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      default:
        return `${period}th`;
    }
  }
}
