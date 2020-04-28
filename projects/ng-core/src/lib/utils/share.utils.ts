import { ShareData } from '../model/share-data';

export class ShareUtils {

  public static shareData(data: ShareData): Promise<void> {
    if (this.isShareSupported()) {
      return ShareUtils.getNav()?.share(data);
    } else {
      return Promise.reject('Share not supported');
    }
  }

  public static isShareSupported(): boolean {
    return ShareUtils.getNav()?.share;
  }

  private static getNav(): any {
    return window?.navigator;
  }
}
