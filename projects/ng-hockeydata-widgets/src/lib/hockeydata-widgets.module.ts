import { NgModule } from '@angular/core';
import { HockeyDataGameScoreComponent } from './components/hockeydata-game-score/hockeydata-game-score.component';
import { CommonModule } from '@angular/common';
import { TeamDisplayComponent } from './components/team-display/team-display.component';
import { HockeyDataGameScorePreviewComponent } from './components/hockeydata-game-score-preview/hockeydata-game-score-preview.component';
import { HockeydataPeriodPipe } from './pipes/hockeydata-period.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HockeyDataGameScoreComponent,
    HockeyDataGameScorePreviewComponent,
    TeamDisplayComponent,
    HockeydataPeriodPipe
  ],
  exports: [
    HockeyDataGameScoreComponent,
    HockeyDataGameScorePreviewComponent,
    HockeydataPeriodPipe
  ]
})
export class HockeyDataWidgetsModule {
}
