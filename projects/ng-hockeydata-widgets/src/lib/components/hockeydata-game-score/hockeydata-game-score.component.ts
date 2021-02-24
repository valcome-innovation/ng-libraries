import { Component, Input, OnInit } from '@angular/core';
import { HockeyDataGameReport, HockeyDataIceHockeyService } from '@valcome/ts-hockeydata-api';

@Component({
  selector: 'hockeydata-game-score',
  templateUrl: './hockeydata-game-score.component.html',
  styleUrls: ['./hockeydata-game-score.component.scss']
})
export class HockeyDataGameScoreComponent implements OnInit {

  public gameReport?: HockeyDataGameReport;
  public error = false;

  @Input()
  public gameId?: string;

  @Input()
  public homeLogo?: string;

  @Input()
  public awayLogo?: string;

  public constructor(private hockeyDataIceHockeyService: HockeyDataIceHockeyService) {
  }

  public async ngOnInit(): Promise<void> {
    this.homeLogo = 'https://api.hockeydata.net/img/icehockey/ebel/team-logos/3328.png';
    this.awayLogo = 'https://api.hockeydata.net/img/icehockey/ebel/team-logos/7607.png';

    if (this.gameId) {
      try {
        this.gameReport = await this.hockeyDataIceHockeyService.getGameReport(this.gameId);
      } catch (e) {
        this.error = true;
      }
    }
  }

}
