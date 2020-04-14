export class JavascriptUtils {
  public static callAfterStackResolved(callback: () => any): void {
    setTimeout(() => callback(), 0);
  }

  public static mapToPlainJavascriptObject(customObject: any): any {
    return JSON.parse(JSON.stringify(customObject));
  }

  public static getInstantiatedObject<T>(object: T, constructor: new() => T): T {
    if (object == null) {
      return new constructor();
    } else {
      return object;
    }
  }

  public static fromJson<T>(json: any, type: any): T {
    const instance = new type();
    for (const prop in json) {
      if (json.hasOwnProperty(prop)) {
        if (typeof json[prop] !== 'object') {
          instance[prop] = json[prop];
        }
      }
    }

    return instance;
  }


  /**
   * Generic clone in typescript
   * https://stackoverflow.com/questions/28150967/typescript-cloning-object
   */
  public static clone<T>(object: any): T {

    // Handle the 3 simple types, and null or undefined
    if (object == null || typeof object !== 'object') {
      return object;
    }

    if (object instanceof Date) {
      return this.cloneDate(object) as any;
    }

    if (object instanceof Array) {
      return this.cloneArray(object) as any;
    }

    if (object instanceof Object) {
      return this.cloneObject(object);
    }

    throw new Error('Unable to clone object! Its type isn\'t supported.');
  }

  private static cloneDate(object: any): Date {
    let clone;
    clone = new Date();
    clone.setTime(object.getTime());
    return clone;
  }

  private static cloneArray<T>(object: any): T[] {
    let clone;
    clone = [];

    for (let i = 0, len = object.length; i < len; i++) {
      clone[i] = this.clone(object[i]);
    }

    return clone;
  }

  private static cloneObject<T extends object>(object: T): T {
    let clone: any = {};

    for (const attr in object) {
      if (object.hasOwnProperty(attr)) {
        clone[attr] = this.clone(object[attr]);
      }
    }

    return clone;
  }
}
