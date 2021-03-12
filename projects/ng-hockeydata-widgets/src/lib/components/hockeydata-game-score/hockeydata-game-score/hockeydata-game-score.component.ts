import { Component } from '@angular/core';
import { BaseGameScoreComponent } from '../../base-game-score.component';

@Component({
  selector: 'hockeydata-game-score',
  templateUrl: './hockeydata-game-score.component.html',
  styleUrls: ['./hockeydata-game-score.component.scss', '../../../styles.scss']
})
export class HockeyDataGameScoreComponent extends BaseGameScoreComponent {
}
