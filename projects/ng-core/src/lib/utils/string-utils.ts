export class StringUtils {
  public static getUnderscoredUniqueString(): string {
    return '_' + this.getUniqueString();
  }

  public static getUniqueString(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
