import { BaseMapper } from './base.mapper';

describe('BaseMapper', () => {
  let humanMapper: BaseMapper<Human>;

  beforeEach(() => {
    humanMapper = new HumanMapper();
  });

  it('should map instance to json', () => {
    const testHuman: Human = getTestHuman();
    const json: any = humanMapper.toJson(testHuman);

    expect(json.name).toBe(testHuman.name);
    expect(json).not.toBe(testHuman);
  });

  it('should map array to json', () => {
    const array = [getTestHuman(), getTestHuman(), getTestHuman()];

    const json: any = humanMapper.toJson(array);

    expect(json.length).toBe(3);
    expect(json[0].name).toEqual(getTestHuman().name);
  });

  it('should create instance from json', () => {
    const json: any = { name: 'John Doe' };
    const actual: Human = humanMapper.fromJson(json);

    expect(actual.name).toBe(json.name);
    expect(actual).not.toBe(json);
  });

  it('should map every entry in list individual', () => {
    const jsonArray: any[] = [{ name: 'John Doe' }, { name: 'John Lennon' }];
    const result: Human[] = humanMapper.fromJsonArray(jsonArray);

    expect(result.length).toEqual(2);
    expect(result[0]).toBeInstanceOf(Human);
    expect(result[1]).toBeInstanceOf(Human);
    expect(result[0].name).toEqual('John Doe');
    expect(result[1].name).toEqual('John Lennon');
  });

  it('should map validated', () => {
    const data = { obj: { value: 'test' } };
    const result = humanMapper.getValidated(data.obj.value);
    expect(result).toEqual(data.obj.value);
  });

  it('should throw error on map validated if undefined', () => {
    expect(() => humanMapper.getValidated(undefined)).toThrowError();
    expect(() => humanMapper.getValidated(null)).toThrowError();
  });
});

function getTestHuman(): Human {
  const testHuman: Human = new Human();
  testHuman.name = 'John Doe';
  return testHuman;
}

class HumanMapper extends BaseMapper<Human> {
  public constructor() {
    super(Human);
  }
}

class Human {
  public name?: string;
}
