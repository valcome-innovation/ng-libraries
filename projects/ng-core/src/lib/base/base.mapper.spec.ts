import { BaseMapper } from './base.mapper';

describe('BaseMapper', () => {
  let humanMapper: BaseMapper<Human>;

  beforeEach(() => {
    humanMapper = new HumanMapper();
  })

  it('should map instance to json clone', () => {
    let testHuman: Human = getTestHuman();
    let json: any = humanMapper.toJson(testHuman);

    expect(json.name).toBe(testHuman.name);
    expect(json).not.toBe(testHuman);
  });

  it('should create instance from json', () => {
    let json: any = {name: 'John Doe'};
    let actual: Human = humanMapper.fromJson(json);

    expect(actual.name).toBe(json.name);
    expect(actual).not.toBe(json);
  });

  it('should map every entry in list individual', () => {
    spyOn(humanMapper, 'fromJson');
    let jsonArray: any[] = [{name: 'John Doe'}, {name: 'John Lennon'}];
    humanMapper.fromJsonArray(jsonArray);

    expect(humanMapper.fromJson).toHaveBeenCalledTimes(2);
  });
})

function getTestHuman(): Human {
  let testHuman: Human = new Human();
  testHuman.name = 'John Doe';
  return testHuman;
}

class HumanMapper extends BaseMapper<Human> {
  public constructor() {
    super(Human);
  }
}

class Human {
  public name: string;
}
