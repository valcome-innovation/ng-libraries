import { Component } from '@angular/core';
import { BaseGameScoreComponent } from '../../base-game-score.component';

@Component({
  selector: 'hockeydata-game-score-preview',
  templateUrl: './hockeydata-game-score-preview.component.html',
  styleUrls: ['./hockeydata-game-score-preview.component.scss', '../../../styles.scss']
})
export class HockeyDataGameScorePreviewComponent extends BaseGameScoreComponent {
}
