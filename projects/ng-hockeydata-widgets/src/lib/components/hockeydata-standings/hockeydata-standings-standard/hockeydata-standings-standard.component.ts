import { Component } from '@angular/core';
import { BaseHockeydataStandingsComponent } from '../base-hockeydata-standings.component';

type TableMode = 'compact' | 'standard';

@Component({
  selector: 'hockeydata-standings',
  templateUrl: './hockeydata-standings-standard.component.html',
  styleUrls: ['./hockeydata-standings-standard.component.scss', '../base-hockeydata-standings.scss']
})
export class HockeyDataStandingsStandardComponent extends BaseHockeydataStandingsComponent {
}
