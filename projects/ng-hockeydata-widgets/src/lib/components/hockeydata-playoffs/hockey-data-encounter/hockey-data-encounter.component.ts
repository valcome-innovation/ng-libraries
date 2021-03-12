import { Component, Input } from '@angular/core';
import { HockeyDataKnockoutEncounter, HockeyDataKnockoutTeamScore } from '@valcome/ts-hockeydata-api';
import { LogoMap } from '../../../model/logo-map';

@Component({
  selector: 'hd-encounter',
  templateUrl: './hockey-data-encounter.component.html',
  styleUrls: ['./hockey-data-encounter.component.scss', '../../../styles.scss']
})
export class HockeyDataEncounterComponent {

  @Input()
  public logoMap: LogoMap = {};

  @Input()
  public set encounter(encounter: HockeyDataKnockoutEncounter) {
    this._encounter = encounter;
    this.leftTeamScore = encounter.teamScores[0];
    this.rightTeamScore = encounter.teamScores[1];
  }

  public get encounter(): HockeyDataKnockoutEncounter {
    return this._encounter;
  }

  private _encounter!: HockeyDataKnockoutEncounter;

  public leftTeamScore!: HockeyDataKnockoutTeamScore;
  public rightTeamScore!: HockeyDataKnockoutTeamScore;
}
