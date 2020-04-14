import { ShareUtils } from './share.utils';
import { ShareData } from '../model/share-data';
import createSpyObj = jasmine.createSpyObj;

describe('ShareUtils', () => {

  beforeEach(() => {
    Object.assign(ShareUtils, { nav: window.navigator });
  });

  it('should not support share as browser by default', () => {
    expect(ShareUtils.isShareSupported()).toBeFalsy();
  });

  it('should reject share', async () => {
    await ShareUtils.shareData(new ShareData('title', 'text', 'url'))
      .catch(error => {
        expect(error).toEqual('Share not supported');
      });
  });

  it('should share data', async () => {
    const navSpy = createSpyObj('nav', {share: Promise.resolve()});
    Object.assign(ShareUtils, { nav: navSpy});
    expect(ShareUtils.isShareSupported()).toBeTruthy();

    await ShareUtils.shareData(new ShareData('title', 'text', 'url')).then(() => {
      expect(navSpy.share).toHaveBeenCalled();
    });
  });
});
