import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDisplayComponent } from './components/hockeydata-game-score/team-display/team-display.component';
import { HockeyDataGameScorePreviewComponent } from './components/hockeydata-game-score/hockeydata-game-score-preview/hockeydata-game-score-preview.component';
import { HockeydataPeriodPipe } from './pipes/hockeydata-period.pipe';
import { PeriodDisplayComponent } from './components/hockeydata-game-score/period-display/period-display.component';
import { HockeyDataStandingsStandardComponent } from './components/hockeydata-standings/hockeydata-standings-standard/hockeydata-standings-standard.component';
import { HockeydataStandingsCompactComponent } from './components/hockeydata-standings/hockeydata-standings-compact/hockeydata-standings-compact.component';
import { HockeyDataGameScoreComponent } from './components/hockeydata-game-score/hockeydata-game-score/hockeydata-game-score.component';
import { HockeyDataPlayoffsComponent } from './components/hockeydata-playoffs/hockey-data-playoffs.component';
import { HockeyDataEncounterComponent } from './components/hockeydata-playoffs/hockey-data-encounter/hockey-data-encounter.component';
import { HockeyDataEncounterResultsComponent } from './components/hockeydata-playoffs/hockey-data-encounter/hockey-data-encounter-results/hockey-data-encounter-results.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HockeyDataGameScoreComponent,
    HockeyDataGameScorePreviewComponent,
    HockeyDataStandingsStandardComponent,
    HockeydataStandingsCompactComponent,
    HockeyDataPlayoffsComponent,
    HockeyDataEncounterComponent,
    HockeyDataEncounterResultsComponent,
    HockeydataPeriodPipe,
    TeamDisplayComponent,
    PeriodDisplayComponent
  ],
  exports: [
    HockeyDataGameScoreComponent,
    HockeyDataGameScorePreviewComponent,
    HockeyDataStandingsStandardComponent,
    HockeydataStandingsCompactComponent,
    HockeyDataPlayoffsComponent,
    HockeydataPeriodPipe
  ]
})
export class HockeyDataWidgetsModule {
}
