import { JavascriptUtils } from './javascript.utils';

class Basic {
  public value: number;
  public text: string;

   public constructor(value: number = 0, text: string = null) {
     this.value = value;
     this.text = text;
  }
}

describe('JavascriptUtils', () => {
  it('should return instantiated object', () => {
    let result = JavascriptUtils.getInstantiatedObject<Basic>(null, Basic);
    expect(result).toBeInstanceOf(Basic);
    expect(result.value).toEqual(0);
    expect(result.text).toEqual(null);

    const basic = new Basic(10, 'Text');
    result = JavascriptUtils.getInstantiatedObject(basic, Basic);
    expect(result).toEqual(basic);
    expect(result.value).toEqual(basic.value);
    expect(result.text).toEqual(basic.text);
  });

  it('should call after stack resolved', () => {
    const printer = {
      print(): void {}
    };

    spyOn(printer, 'print');
    JavascriptUtils.callAfterStackResolved(() => printer.print());

    expect(printer.print).toHaveBeenCalledTimes(0);
    setTimeout(() => expect(printer).toHaveBeenCalledTimes(1), 100);
  });

  it('should map to plain javascript object', () => {
    const basic = new Basic(10, 'Text');
    const result = JavascriptUtils.mapToPlainJavascriptObject(basic);
    expect(result).not.toBeInstanceOf(Basic);
    expect(result.value).toEqual(basic.value);
    expect(result.text).toEqual(basic.text);
  });

  it('should clone source object', () => {
    let result = JavascriptUtils.clone(null);
    expect(result).toBeNull();

    const basic = new Basic(10, 'Text');
    result = JavascriptUtils.clone<Basic>(basic);
    expect(result).toBeInstanceOf(Basic);
  });

  it('should map native types from json', () => {
    const json = { value: 1, text: 'some text', array: [1, 2, 3] };
    const result: Basic = JavascriptUtils.fromJson(json, Basic);
    expect(result).toBeInstanceOf(Basic);
    expect(result.value).toEqual(1);
    expect(result.text).toEqual('some text');
    expect(result['array']).toBeUndefined();
  });
});
