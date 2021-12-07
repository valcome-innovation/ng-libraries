import { StringUtils } from '../utils/string-utils';

export type UriComponent = string | number | boolean;

export class UrlBuilder {

  private baseUrl: string;
  private pathParams: string[] = [];
  private queryParams: string[] = [];

  public constructor(baseUrl: string) {
    this.baseUrl = StringUtils.trimSlashes(baseUrl);
  }

  /**
   * A relative path is everything after the domain + port part of an url.
   * E.g./path/name/file.jpg?v=1
   */
  public addFullPath(relativePath: string): this {
    relativePath = StringUtils.trimSlashes(relativePath);
    const [paths, ...search] = relativePath.split('?');

    this.addPaths(paths.split('/'));

    if (search.length >= 1) {
      this.addQueryParams(search[0].split('&'));
    }

    return this;
  }

  /**
   * Adds literal path (including slashes)
   */
  public addPath(path: UriComponent): this {
    this.pathParams.push(encodeURIComponent(path));

    return this;
  }

  public addPaths(path: UriComponent[]): this {
    path.forEach(p => this.addPath(p));

    return this;
  }

  /**
   * Removes all preceding and trailing slashes in path
   */
  public addPathTrimmed(path: UriComponent): this {
    if (typeof path === 'string') {
      path = StringUtils.trimSlashes(path);
    }

    this.addPath(path);

    return this;
  }

  public addPathsTrimmed(path: UriComponent[]): this {
    path.forEach(p => this.addPathTrimmed(p));

    return this;
  }

  public addQueryParam(key: string): this
  public addQueryParam(key: string, value: UriComponent): this
  public addQueryParam(key: string, value?: UriComponent): this {
    if (value != undefined) {
      this.queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    } else if (key.includes('=')) {
      this.queryParams.push(key.split('=').map(k => encodeURIComponent(k)).join('='));
    }

    return this;
  }

  public addQueryParams(fullParams: string[]): this {
    fullParams.forEach(p => this.addQueryParam(p));

    return this;
  }

  public getPath(): string {
    return this.pathParams.join('/');
  }

  public getSearch(): string {
    return this.queryParams.join('&');
  }

  public getFullPath(): string {
    return `${this.getPath()}?${this.getSearch()}`
  }

  public getUrl(): string {
    if (this.pathParams.length > 0) {
      this.baseUrl += `/${this.getPath()}`;
    }

    if (this.queryParams.length > 0) {
      this.baseUrl += `?${this.getSearch()}`;
    }

    return this.baseUrl;
  }
}
