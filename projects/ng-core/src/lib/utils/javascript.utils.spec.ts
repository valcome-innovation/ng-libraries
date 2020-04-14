import { JavascriptUtils } from './javascript.utils';

class Basic {
  public value: number;
  public text: string;
}

describe('JavascriptUtils', () => {
  it('should map native types from json', () => {
    let json = { value: 1, text: "some text", array: [1, 2, 3] };
    let result: Basic = JavascriptUtils.fromJson(json, Basic);
    expect(result).toBeInstanceOf(Basic);
    expect(result.value).toEqual(1);
    expect(result.text).toEqual("some text");
    expect(result['array']).toBeUndefined();
  });
});
