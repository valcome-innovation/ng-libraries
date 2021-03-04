import { NgModule } from '@angular/core';
import { HockeyDataGameScoreComponent } from './components/hockeydata-game-score/hockeydata-game-score.component';
import { CommonModule } from '@angular/common';
import { TeamDisplayComponent } from './components/team-display/team-display.component';
import { HockeyDataGameScorePreviewComponent } from './components/hockeydata-game-score-preview/hockeydata-game-score-preview.component';
import { HockeydataPeriodPipe } from './pipes/hockeydata-period.pipe';
import { PeriodDisplayComponent } from './components/period-display/period-display.component';
import { HockeyDataStandingsStandardComponent } from './components/hockeydata-standings/hockeydata-standings-standard/hockeydata-standings-standard.component';
import { HockeydataStandingsCompactComponent } from './components/hockeydata-standings/hockeydata-standings-compact/hockeydata-standings-compact.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HockeyDataGameScoreComponent,
    HockeyDataGameScorePreviewComponent,
    HockeyDataStandingsStandardComponent,
    HockeydataStandingsCompactComponent,
    HockeydataPeriodPipe,
    TeamDisplayComponent,
    PeriodDisplayComponent
  ],
  exports: [
    HockeyDataGameScoreComponent,
    HockeyDataGameScorePreviewComponent,
    HockeyDataStandingsStandardComponent,
    HockeydataStandingsCompactComponent,
    HockeydataPeriodPipe
  ]
})
export class HockeyDataWidgetsModule {
}
