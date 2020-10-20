import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'val-skeleton-line',
  templateUrl: './skeleton-line.component.html',
  styleUrls: ['./skeleton-line.component.scss']
})
export class SkeletonLineComponent implements OnInit {

  @Input()
  public widthInterval: number[] = [];

  @Input()
  public unit = 'px';

  public width = '100%';

  public ngOnInit(): void {
    if (this.widthInterval?.length == 2) {
      this.width = this.generateRandomWidth(this.widthInterval[0], this.widthInterval[1]);
    } else if (this.widthInterval?.length == 1) {
      this.width = this.generateWidthString(this.widthInterval[0]);
    }
  }

  private generateRandomWidth(start: number, end: number): string {
    let range: number = end - start;
    let randomWidth: number = Math.round(Math.random() * range + start);
    return this.generateWidthString(randomWidth);
  }

  private generateWidthString(width: number): string {
    return width + this.unit;
  }
}
