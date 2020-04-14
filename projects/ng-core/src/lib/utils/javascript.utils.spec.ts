import { JavascriptUtils } from './javascript.utils';

class Basic {
  public value: number;
  public text: string;
  public nested: object;

   public constructor(value: number = 0, text: string = null, nested: object = null) {
     this.value = value;
     this.text = text;
     this.nested = nested;
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
  });

  it('should map to plain javascript object', () => {
    const basic = new Basic(10, 'Text');
    const result = JavascriptUtils.mapToPlainJavascriptObject(basic);
    expect(result).not.toBeInstanceOf(Basic);
    expect(result.value).toEqual(basic.value);
    expect(result.text).toEqual(basic.text);
  });

  it('should clone source object', () => {
    let result: any = JavascriptUtils.clone(null);
    expect(result).toBeNull();

    const basic = new Basic(10, 'Text');
    result = JavascriptUtils.clone<Basic>(basic);
    expect(result).not.toBe(basic);
    expect(result).toBeInstanceOf(Basic);
    expect(result.value).toEqual(10);
    expect(result.text).toEqual('Text');
    expect(result.nested).toBeNull();
  });

  it('should clone source object with nested object', () => {
    const nested: Basic = new Basic(20, 'Nested', null);
    const basic = new Basic(10, 'Text', nested);
    const result = JavascriptUtils.clone<Basic>(basic);

    expect(result.nested).toBeInstanceOf(Basic);
    expect(result.nested['value']).toEqual(20);
    expect(result.nested['text']).toEqual('Nested');
    expect(result.nested['nested']).toBeNull();
  });

  it('should clone source object with nested arrays', () => {
    let basic = new Basic(10, 'Text', [1, 2 , 3]);
    let result = JavascriptUtils.clone<Basic>(basic);
    expect(result.nested).toBeInstanceOf(Array);
    expect(result.nested['length']).toEqual(3);

    const nested = new Basic(20, 'Nested', [1, 2 , 3]);
    basic = new Basic(10, 'Text', nested);
    result = JavascriptUtils.clone<Basic>(basic);
    expect(result.nested['nested']).toBeInstanceOf(Array);
    expect(result.nested['nested'].length).toEqual(3);
  });

  it('should clone source object with nested Date', () => {
    let basic = new Basic(10, 'Text', new Date());
    let result = JavascriptUtils.clone<Basic>(basic);
    expect(result.nested).toBeInstanceOf(Date);

    const nested = new Basic(20, 'Nested', new Date());
    basic = new Basic(10, 'Text', nested);
    result = JavascriptUtils.clone<Basic>(basic);
    expect(result.nested['nested']).toBeInstanceOf(Date);
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
