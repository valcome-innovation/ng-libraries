import { StringUtils } from './string-utils';

describe('StringsUtils', () => {

  it('should get unique string', () => {
    const string1 = StringUtils.getUniqueString();
    const string2 = StringUtils.getUniqueString();

    expect(string1).not.toEqual(string2);
  });

  it('should start with _', () => {
    let underscoreString: string = StringUtils.getUnderscoredUniqueString();
    expect(underscoreString[0]).toEqual('_');
  });

  it('should stringify safe', () => {
    const a = { yeah: '1' };
    const b = { a, b: {} };
    b.b = b;

    const result = StringUtils.safeStringify(b);

    expect(result).toBeTruthy();
    expect(result).toEqual('{"a":{"yeah":"1"}}');
  });
})
