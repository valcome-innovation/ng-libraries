import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'val-skeleton-square',
  templateUrl: './skeleton-square.component.html',
  styleUrls: ['./skeleton-square.component.scss', '../skeleton.scss']
})
export class SkeletonSquareComponent implements OnInit {

  @Input()
  public dimensions: number = 100;

  @Input()
  public unit: string = 'px';

  @Input()
  public theme: 'light' | 'dark' = 'light';

  public width!: string;
  public height!: string;

  public ngOnInit(): void {
    this.width = this.dimensions + this.unit;
    this.height = this.dimensions + this.unit;
  }
}
