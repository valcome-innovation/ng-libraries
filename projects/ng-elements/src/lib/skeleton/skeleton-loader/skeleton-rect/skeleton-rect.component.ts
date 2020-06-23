import { Component, Input } from '@angular/core';

@Component({
  selector: 'val-skeleton-rect',
  templateUrl: './skeleton-rect.component.html',
  styleUrls: ['./skeleton-rect.component.scss']
})
export class SkeletonRectComponent {

  @Input()
  public maxWidthWithUnit: string = '100%';

  @Input()
  public widthWithUnit: string = '100px';

  @Input()
  public heightWithUnit: string = '100px';
}
