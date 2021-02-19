export type UriComponent = string | number | boolean;

export class UrlBuilder {

  private baseUrl: string;
  private pathParams: string[] = [];
  private queryParams: string[] = [];

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public addPath(path: UriComponent): void {
    this.pathParams.push(encodeURIComponent(path));
  }

  public addQueryParam(key: string, value: UriComponent): void {
    this.queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }

  public getUrl(): string {
    if (this.pathParams.length > 0) {
      this.baseUrl += `/${this.pathParams.join('/')}`;
    }

    if (this.queryParams.length > 0) {
      this.baseUrl += `?${this.queryParams.join('&')}`;
    }

    return this.baseUrl;
  }
}
