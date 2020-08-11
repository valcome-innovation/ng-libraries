import { JsUtils } from '@valcome/ts-core';

export class GenericMapper<T> {

  public static toJson<T>(instance: T | T[]): any {
    return JsUtils.clone(instance);
  }

  public static fromJson<T>(json: any | any[], type: any): T {
    return JsUtils.fromJson(json, type);
  }

  public static fromJsonArray<T>(jsonArray: any[], type: any): T[] {
    const res: T[] = [];

    for (const j of jsonArray) {
      res.push(GenericMapper.fromJson(j, type));
    }

    return res;
  }
}
