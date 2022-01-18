import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseHockeydataStandingsComponent } from '../base-hockeydata-standings.component';

@Component({
  selector: 'hd-standings',
  templateUrl: './hockeydata-standings-standard.component.html',
  styleUrls: ['./hockeydata-standings-standard.component.scss', '../base-hockeydata-standings.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HockeyDataStandingsStandardComponent extends BaseHockeydataStandingsComponent {
}
