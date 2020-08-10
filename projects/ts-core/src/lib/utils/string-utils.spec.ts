import { StringUtils } from './string-utils';

describe('StringsUtils', () => {
  it('should start with _', () => {
    let underscoreString: string = StringUtils.getUnderscoredUniqueString();
    expect(underscoreString[0]).toEqual('_');
  });
})
