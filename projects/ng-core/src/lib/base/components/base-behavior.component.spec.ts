import { BehaviorSubject } from 'rxjs';
import { BaseBehaviorComponent } from './base-behavoir.component';

describe('BaseBehaviorComponent', () => {
  let behaviorSubject: BehaviorSubject<number>
  let typedBehaviorSubject: BehaviorSubject<Date>
  let baseBehaviorSubjectComponent: BaseBehaviorComponentSpec;
  let baseTypedBehaviorSubjectComponent: BaseTypedBehaviorComponentSpec;

  beforeEach(() => {
    behaviorSubject = new BehaviorSubject<number>(10);
    baseBehaviorSubjectComponent = new BaseBehaviorComponentSpec(behaviorSubject);

    typedBehaviorSubject = new BehaviorSubject<Date>(new Date());
    baseTypedBehaviorSubjectComponent = new BaseTypedBehaviorComponentSpec(typedBehaviorSubject);
  });

  it('should update initial value', () => {
    expect(baseBehaviorSubjectComponent.value).toEqual(10);
  });

  it('should update value on next', () => {
    behaviorSubject.next(100);
    expect(baseBehaviorSubjectComponent.value).toEqual(100);
  });

  it('should call onChange not more than once per change', () => {
    let counter = baseBehaviorSubjectComponent.changeCounter
    expect(baseBehaviorSubjectComponent.changeCounter).toBe(counter);

    behaviorSubject.next(20);
    expect(baseBehaviorSubjectComponent.changeCounter).toBe(counter + 1);

    behaviorSubject.next(20);
    expect(baseBehaviorSubjectComponent.changeCounter).toBe(counter + 2);
  });

  it('should handle invalid inputs', () => {
    expect(() => {
      baseBehaviorSubjectComponent = new BaseBehaviorComponentSpec(null!);
    }).not.toThrow();
  });

  it('should keep type', () => {
    typedBehaviorSubject.next(new Date());
    expect(baseTypedBehaviorSubjectComponent.value).toBeInstanceOf(Date);
  });
})

class BaseBehaviorComponentSpec extends BaseBehaviorComponent {
  public value = 0;
  public changeCounter: number = 0;

  public constructor(value: BehaviorSubject<number>) {
    super();
    this.listen<number>(value, this.onValueChange.bind(this))
  }

  public onValueChange(value: number): void {
    this.changeCounter++;
    this.value = value
  }
}

class BaseTypedBehaviorComponentSpec extends BaseBehaviorComponent {
  public value?: Date;
  public changeCounter: number = 0;

  public constructor(value: BehaviorSubject<Date>) {
    super();
    this.listenTyped(value, Date, this.onValueChange.bind(this))
  }

  public onValueChange(value: Date): void {
    this.changeCounter++;
    this.value = value
  }
}
