import { JsUtils } from './js.utils';

class Basic {
  public value: number;
  public text: string;
  public nested: any;

  public constructor(value: number = 0, text: string = null, nested: object = null) {
    this.value = value;
    this.text = text;
    this.nested = nested;
  }
}

describe('JsUtils', () => {
  it('should return instantiated object', () => {
    let result = JsUtils.getInstantiatedObject<Basic>(null, Basic);
    expect(result).toBeInstanceOf(Basic);
    expect(result.value).toEqual(0);
    expect(result.text).toEqual(null);

    const basic = new Basic(10, 'Text');
    result = JsUtils.getInstantiatedObject(basic, Basic);
    expect(result).toEqual(basic);
    expect(result.value).toEqual(basic.value);
    expect(result.text).toEqual(basic.text);
  });

  it('should call after stack resolved', () => {
    const printer = {
      print(): void {
      }
    };

    spyOn(printer, 'print');
    JsUtils.callAfterStackResolved(() => printer.print());

    expect(printer.print).toHaveBeenCalledTimes(0);
  });

  it('should map to plain javascript object', () => {
    const basic = new Basic(10, 'Text');
    const result = JsUtils.mapToPlainJavascriptObject(basic);
    expect(result).not.toBeInstanceOf(Basic);
    expect(result.value).toEqual(basic.value);
    expect(result.text).toEqual(basic.text);
  });

  it('should clone source object', () => {
    let result: any = JsUtils.clone(null);
    expect(result).toBeNull();

    const basic = new Basic(10, 'Text');
    result = JsUtils.clone<Basic>(basic);
    expect(result).not.toBe(basic);
    expect(result).toBeInstanceOf(Basic);
    expect(result.value).toEqual(10);
    expect(result.text).toEqual('Text');
    expect(result.nested).toBeNull();
  });

  it('should clone source object and nested object', () => {
    const nested: Basic = new Basic(20, 'Nested', null);
    const basic = new Basic(10, 'Text', nested);
    const result = JsUtils.clone<Basic>(basic);

    expect(result.nested).toBeInstanceOf(Basic);
    expect(result.nested).not.toBe(nested);
    expect(result.nested.value).toEqual(20);
    expect(result.nested.text).toEqual('Nested');
    expect(result.nested.nested).toBeNull();
  });

  it('should clone source object with nested arrays', () => {
    let basic = new Basic(10, 'Text', [1, 2, 3]);
    let result = JsUtils.clone<Basic>(basic);
    expect(result.nested).toBeInstanceOf(Array);
    expect(result.nested.length).toEqual(3);

    const nested = new Basic(20, 'Nested', [1, 2, 3]);
    basic = new Basic(10, 'Text', nested);
    result = JsUtils.clone<Basic>(basic);
    expect(result.nested).not.toBe(nested);
    expect(result.nested.nested).toBeInstanceOf(Array);
    expect(result.nested.nested.length).toEqual(3);
  });

  it('should clone source object with nested Date', () => {
    let basic = new Basic(10, 'Text', new Date());
    let result = JsUtils.clone<Basic>(basic);
    expect(result.nested).toBeInstanceOf(Date);

    const nested = new Basic(20, 'Nested', new Date());
    basic = new Basic(10, 'Text', nested);
    result = JsUtils.clone<Basic>(basic);
    expect(result.nested).not.toBe(nested);
    expect(result.nested.nested).toBeInstanceOf(Date);
  });

  it('should return same instance', () => {
    const input = 1;
    const result = JsUtils.clone(input);
    expect(result).toBe(input);
  });

  it('should map native types from json', () => {
    const json = { value: 1, text: 'some text', array: [1, 2, 3] };
    const result: Basic = JsUtils.fromJson(json, Basic);
    expect(result).toBeInstanceOf(Basic);
    expect(result.value).toEqual(1);
    expect(result.text).toEqual('some text');
    expect(result['array']).toBeUndefined();
  });

  it('should immute object', () => {
    let object: any = { value: 20 }
    let copy: any = JsUtils.immute(object);

    object.value = 10;

    expect(copy.value).toBe(20);
  });

  it('should immute object with type', () => {
    let object: Basic = new Basic(20);
    let copy: Basic = JsUtils.immuteTyped<Basic>(object, Basic);

    object.value = 10;

    expect(copy.value).toBe(20);
    expect(copy).toBeInstanceOf(Basic);
  });

  it('should convert null to undeefined', () => {
    const result = JsUtils.nullToUndefined({
      test: null,
      yeah: {
        prop1: '2',
        prop2: undefined,
        prop3: null
      }
    })

    expect(result.test).toEqual(undefined);
    expect(result.yeah.prop1).toEqual('2');
    expect(result.yeah.prop2).toEqual(undefined);
    expect(result.yeah.prop3).toEqual(undefined);
  });

  it('flat clean object', () => {
    let result: any = {
      test: null,
      hey: '123',
      yeah: {
        prop1: '2',
        prop2: null
      }
    };

    const isValid = !('test' in result)
      && 'hey' in result
      && 'yeah' in result
      && 'prop2' in result.yeah;

    expect(isValid).toBe(true);
  });
});
