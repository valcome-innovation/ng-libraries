import { JsUtils } from '../utils/js.utils';

export class GenericMapper {

  public static toJson<T>(instance: T | T[]): any {
    return JsUtils.clone<T>(instance);
  }

  public static fromJson<T>(json: any | any[], type: any): T {
    return JsUtils.fromJson<T>(json, type);
  }

  public static fromJsonArray<T>(jsonArray: any[], type: any): T[] {
    return jsonArray.map(j => this.fromJson<T>(j, type));
  }
}
