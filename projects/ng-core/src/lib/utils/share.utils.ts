import { ShareData } from '../model/share-data';

export class ShareUtils {

  private static readonly nav: any =  window?.navigator;

  public static shareData(data: ShareData): Promise<void> {
    if (this.isShareSupported()) {
      return ShareUtils.nav?.share(data);
    } else {
      return Promise.reject('Share not supported');
    }
  }

  public static isShareSupported(): boolean {
    return ShareUtils.nav?.share;
  }
}
