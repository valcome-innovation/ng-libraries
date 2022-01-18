import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { HockeyDataKnockoutPhase } from '@valcome/ts-hockeydata-api';
import { LogoMap } from '../../model/logo-map';

@Component({
  selector: 'hd-playoffs',
  templateUrl: './hockey-data-playoffs.component.html',
  styleUrls: ['./hockey-data-playoffs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HockeyDataPlayoffsComponent {

  @Input()
  public phases: HockeyDataKnockoutPhase[] = [];

  @Input()
  public logoMap: LogoMap = {};

  public trackBy: TrackByFunction<HockeyDataKnockoutPhase[]> = index => index;
}
