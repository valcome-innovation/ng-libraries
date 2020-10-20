export class Image {
  public url: string;
  public alt: string;
  public sortOrder: number;

  public constructor(url: string, alt: string, sortOrder: number) {
    this.url = url;
    this.alt = alt;
    this.sortOrder = sortOrder;
  }
}
