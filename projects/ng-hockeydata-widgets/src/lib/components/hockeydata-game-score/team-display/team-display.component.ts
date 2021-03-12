import { Component, Input } from '@angular/core';

export type LogoAlignment = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'hd-team-display',
  templateUrl: './team-display.component.html',
  styleUrls: ['./team-display.component.scss']
})
export class TeamDisplayComponent {
  @Input()
  public name?: string;

  @Input()
  public logo?: string;

  @Input()
  public logoAlignment: LogoAlignment = 'top';
}
