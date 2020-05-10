import { JsUtils } from '../utils/js.utils';

export abstract class BaseMapper<T> {

  protected constructor(private readonly type: any) {
  }

  public toJson(instance: T | T[]): any {
    return JsUtils.clone<T>(instance);
  }

  public fromJson(json: any | any[]): T {
    return JsUtils.fromJson<T>(json, this.type);
  }

  public fromJsonArray(jsonArray: any[]): T[] {
    return jsonArray.map(j => this.fromJson(j));
  }
}
