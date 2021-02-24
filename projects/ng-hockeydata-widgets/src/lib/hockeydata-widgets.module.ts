import { NgModule } from '@angular/core';
import { HockeyDataGameScoreComponent } from './components/hockeydata-game-score/hockeydata-game-score.component';
import { CommonModule } from '@angular/common';
import { TeamDisplayComponent } from './components/team-display/team-display.component';


@NgModule({
  declarations: [
    HockeyDataGameScoreComponent,
    TeamDisplayComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HockeyDataGameScoreComponent
  ]
})
export class HockeyDataWidgetsModule {
}
