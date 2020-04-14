import { JavascriptUtils } from '../utils/javascript.utils';

export abstract class BaseMapper<T> {

  public abstract fromJson(json: any): T;

  public toJson(instance: T): any {
    return JavascriptUtils.clone<T>(instance);
  }

  public fromJsonArray(jsonArray: any[]): T[] {
    return jsonArray.map(j => this.fromJson(j));
  }

  protected fromJsonUntyped(json: any, type: any): T {
    return JavascriptUtils.fromJson<T>(json, type);
  }
}
