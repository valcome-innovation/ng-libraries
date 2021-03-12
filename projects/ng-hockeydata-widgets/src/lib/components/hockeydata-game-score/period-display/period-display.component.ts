import { Component, Input } from '@angular/core';
import { HockeyDataGameReport } from '@valcome/ts-hockeydata-api';

@Component({
  selector: 'hd-period-display',
  templateUrl: './period-display.component.html',
  styleUrls: ['./period-display.component.scss', '../../../styles.scss']
})
export class PeriodDisplayComponent {
  @Input()
  public gameReport?: HockeyDataGameReport;
}
