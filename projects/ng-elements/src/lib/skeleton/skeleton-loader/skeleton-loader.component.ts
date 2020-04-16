import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.css']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input()
  public amount: number = 30;

  public skeletons: number[] = [];

  public ngOnInit(): void {
    this.skeletons = Array.from(new Array(this.amount), (x,i) => i+1)
  }


}
