import { NgModule } from '@angular/core';
import { HockeyDataGameScoreComponent } from './components/hockeydata-game-score/hockeydata-game-score.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HockeyDataGameScoreComponent
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
