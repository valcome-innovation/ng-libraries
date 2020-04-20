import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ArrayUtils } from '@valcome/ng-core';

@Component({
  selector: 'val-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkeletonLoaderComponent implements OnInit {

  @Input()
  public amount: number = 30;

  public skeletons: number[] = [];

  public ngOnInit(): void {
    this.skeletons = ArrayUtils.createArrayFromNumber(this.amount);
  }
}
