import { FileUtils } from './file.utils';

describe('FileUtils', () => {

  it('should get file name from s3 keys', () => {
    const actual = FileUtils.getFileNameFromUrl('ifa/6lpru563bavkvdie8pi/20180110_112754_Gro__es_Finale.mp4');

    expect(actual).toEqual({ name: '20180110_112754_Gro__es_Finale', suffix: 'mp4' });
  });
});

