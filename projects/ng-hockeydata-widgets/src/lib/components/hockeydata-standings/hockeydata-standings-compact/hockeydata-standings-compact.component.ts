import { Component } from '@angular/core';
import { BaseHockeydataStandingsComponent } from '../base-hockeydata-standings.component';

@Component({
  selector: 'hockeydata-standings-compact',
  templateUrl: './hockeydata-standings-compact.component.html',
  styleUrls: ['./hockeydata-standings-compact.component.scss', '../base-hockeydata-standings.scss']
})
export class HockeydataStandingsCompactComponent extends BaseHockeydataStandingsComponent {
}
