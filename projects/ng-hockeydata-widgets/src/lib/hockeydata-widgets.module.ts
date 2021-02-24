import { NgModule } from '@angular/core';
import { HockeyDataGameScoreComponent } from './components/hockeydata-game-score/hockeydata-game-score.component';
import { HockeyDataApiModule } from 'ts-hockeydata-api';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HockeyDataGameScoreComponent
  ],
  imports: [
    CommonModule,
    HockeyDataApiModule.forChild()
  ],
  exports: [
    HockeyDataGameScoreComponent
  ]
})
export class HockeyDataWidgetsModule {
}
