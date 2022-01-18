import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HockeyDataKnockoutEncounter, HockeyDataKnockoutTeamScore } from '@valcome/ts-hockeydata-api';
import { LogoMap } from '../../../model/logo-map';

export type EncounterConfig = {
  logoMap: LogoMap;
  encounter: HockeyDataKnockoutEncounter
};

export type EncounterTeam = {
  score: HockeyDataKnockoutTeamScore,
  logo: string
}

@Component({
  selector: 'hd-encounter',
  templateUrl: './hockey-data-encounter.component.html',
  styleUrls: ['./hockey-data-encounter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HockeyDataEncounterComponent {

  @Input()
  public set encounterConfig({ encounter, logoMap }: EncounterConfig) {
    this._encounter = encounter;
    const firstScore = encounter.teamScores[0];
    const secondScore = encounter.teamScores[0];

    this.leftTeam = { score: firstScore, logo: logoMap[firstScore.shortName] };
    this.rightTeam = { score: secondScore, logo: logoMap[secondScore.shortName] };
  }

  public get encounter(): HockeyDataKnockoutEncounter {
    return this._encounter;
  }

  private _encounter!: HockeyDataKnockoutEncounter;

  public leftTeam!: EncounterTeam;
  public rightTeam!: EncounterTeam;
}
