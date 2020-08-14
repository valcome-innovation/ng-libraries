import { GenericMapper } from './generic.mapper';

describe('GenericMapper', () => {

  beforeEach(() => {
  });

  it('should map instance to json clone', () => {
    const testHuman: Human = getTestHuman();
    const nestedValue = testHuman.nested.value;
    const json: any = GenericMapper.toJson(testHuman);
    testHuman.nested = null;

    expect(json.name).toBe(testHuman.name);
    expect(json.nested.value).toBe(nestedValue);
    expect(json.nestedNested.nested.value).toBe(testHuman.nestedNested.nested.value);
    expect(json).not.toBe(testHuman);
  });

  it('should create instance from json', () => {
    const json: any = { name: 'John Doe' };
    const actual: Human = GenericMapper.fromJson(json, Human);

    expect(actual).toBeInstanceOf(Human);
    expect(actual.name).toBe(json.name);
    expect(actual).not.toBe(json);
  });

  it('should map every entry in list individual', () => {
    const jsonArray: any[] = [{ name: 'John Doe' }, { name: 'John Lennon' }];
    const result: Human[] = GenericMapper.fromJsonArray<Human>(jsonArray, Human);

    expect(result.length).toEqual(2);
    expect(result[0]).toBeInstanceOf(Human);
    expect(result[1]).toBeInstanceOf(Human);
    expect(result[0].name).toEqual('John Doe');
    expect(result[1].name).toEqual('John Lennon');
  });
});

function getTestHuman(name: string = 'John Doe'): Human {
  const testHuman: Human = new Human();
  testHuman.name = name;
  testHuman.nested = { value: 1 };
  testHuman.nestedNested = { nested: { value: 1 } };
  return testHuman;
}

class Human {
  public name: string;
  public nested: { value: number };
  public nestedNested: { nested: { value: number } };
}
