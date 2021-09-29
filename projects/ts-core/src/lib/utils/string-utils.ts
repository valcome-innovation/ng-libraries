export class StringUtils {

  public static getUnderscoredUniqueString(): string {
    return '_' + this.getUniqueString();
  }

  public static getUniqueString(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  public static trimSlashes(value: string): string {
    let result = value;

    while (result.length > 0 && result[0] === '/') {
      result = result.slice(1);
    }
    while (result.length > 0 && result[result.length - 1] === '/') {
      result = result.slice(0, -1);
    }

    return result;
  }

  // https://stackoverflow.com/a/11616993/12237560
  public static safeStringify(value: any): string {
    const cache: any[] = [];

    return JSON.stringify(value, (key, val) => {
      if (typeof val === 'object' && val !== null) {

        // Duplicate reference found, discard key
        if (cache.includes(val)) {
          return;
        }

        // Store value in our collection
        cache.push(val);
      }
      return val;
    });
  }
}
