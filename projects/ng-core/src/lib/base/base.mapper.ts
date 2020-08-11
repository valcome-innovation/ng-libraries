import { GenericMapper } from './generic.mapper';

export abstract class BaseMapper<T> {

  protected constructor(private readonly type: any) {
  }

  public toJson(instance: T | T[]): any {
    return GenericMapper.toJson<T>(instance);
  }

  public fromJson(json: any | any[]): T {
    return GenericMapper.fromJson<T>(json, this.type);
  }

  public fromJsonArray(jsonArray: any[]): T[] {
    return jsonArray.map(j => this.fromJson(j));
  }
}
