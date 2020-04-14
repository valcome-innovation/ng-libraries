import { BehaviorSubject } from 'rxjs';
import { BaseBehaviorSubjectComponent } from './base-behavoir-subject.component';

describe('BaseBehaviorSubjectComponent', () => {
  let behaviorSubject: BehaviorSubject<number>
  let baseBehaviorSubjectComponent: BaseBehaviorSubjectComponentSpec;

  beforeEach(() => {
    behaviorSubject = new BehaviorSubject<number>(10);
    baseBehaviorSubjectComponent = new BaseBehaviorSubjectComponentSpec(behaviorSubject);
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
      baseBehaviorSubjectComponent = new BaseBehaviorSubjectComponentSpec(null);
    }).not.toThrow();
  });
})

class BaseBehaviorSubjectComponentSpec extends BaseBehaviorSubjectComponent {
  public value: number;
  public changeCounter: number = 0;

  public constructor(value: BehaviorSubject<number>) {
    super();
    this.listen(value, this.onValueChange.bind(this))
  }

  public onValueChange(value: number): void {
    this.changeCounter++;
    this.value = value
  }
}
