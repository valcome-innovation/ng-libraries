export class HockeyDataLocation {
  public longName: string;
  public shortName: string;
  public lat?: number;
  public lng?: number;

  public constructor(longName: string, shortName: string, lat?: number, lng?: number) {
    this.longName = longName;
    this.shortName = shortName;
    this.lat = lat;
    this.lng = lng;
  }
}
