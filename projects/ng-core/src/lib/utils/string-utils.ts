export class StringUtils {
  public static getUnderscoredUniqueString(): string {
    return '_' + this.getUniqueString();
  }

  public static getUniqueString(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  public static extractHostname(url: string): string {
    let hostname;

    if (url.indexOf("//") > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];

    return hostname;
  }
}
