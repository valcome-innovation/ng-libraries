import { Component, Input } from '@angular/core';

@Component({
  selector: 'val-skeleton-rect',
  templateUrl: './skeleton-rect.component.html',
  styleUrls: ['./skeleton-rect.component.scss', '../skeleton.scss']
})
export class SkeletonRectComponent {

  @Input()
  public maxWidthWithUnit = '100%';

  @Input()
  public widthWithUnit = '100px';

  @Input()
  public heightWithUnit = '100px';

  @Input()
  public theme: 'light' | 'dark' = 'light';
}
