import { GenericMapper } from './generic.mapper';

export abstract class BaseMapper<T> {

  protected constructor(protected readonly type: any) {
  }

  public toJson(instance: T | T[]): any {
    if (Array.isArray(instance)) {
      return instance.map(i => this.toJson(i));
    } else {
      return GenericMapper.toJson<T>(instance);
    }
  }

  public fromJson(json: any | any[]): T {
    return GenericMapper.fromJson<T>(json, this.type);
  }

  public fromJsonArray(jsonArray: any[]): T[] {
    return jsonArray.map(j => this.fromJson(j));
  }

  public getValidated<V>(data: V | undefined): V {
    if (data != null) {
      return data;
    } else {
      throw new Error('Value is not defined');
    }
  }
}
