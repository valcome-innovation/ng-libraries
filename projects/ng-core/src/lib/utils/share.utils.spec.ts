import { ShareUtils } from './share.utils';
import { ShareData } from '../model/share-data';
import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;
import { PromiseType } from 'protractor/built/plugins';

describe('ShareUtils', () => {

  it('should not support share as browser by default', () => {
    expect(ShareUtils.isShareSupported()).toBeFalsy();
  });

  it('should reject share', async () => {
    await ShareUtils.shareData(new ShareData('title', 'text', 'url'))
      .catch(error => {
        expect(error).toEqual('Share not supported');
      });
  });
});
