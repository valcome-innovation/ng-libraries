export class StringUtils {
  public static getUnderscoredUniqueString(): string {
    return '_' + this.getUniqueString();
  }

  public static getUniqueString(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }


  // https://stackoverflow.com/a/11616993/12237560
  public static safeStringify(value: any): string {
    const cache: any[] = [];

    return JSON.stringify(value, (key, value) => {
      if (typeof value === 'object' && value !== null) {

        // Duplicate reference found, discard key
        if (cache.includes(value)) {
          return;
        }

        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
  }
}
