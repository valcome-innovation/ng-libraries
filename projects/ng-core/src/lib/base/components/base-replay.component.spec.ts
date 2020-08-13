import { ReplaySubject } from 'rxjs';
import { BaseReplayComponent } from './base-replay.component';

describe('BaseReplaySubjectComponent', () => {

  let replaySubject: ReplaySubject<number>
  let component: BaseReplaySubjectComponentSpec;

  beforeEach(() => {
    replaySubject = new ReplaySubject<number>(1);
    component = new BaseReplaySubjectComponentSpec(replaySubject);
  });

  it('should update value on next', () => {
    component.init();

    replaySubject.next(100);

    expect(component.value).toEqual(100);
  });

  it('should wait for first next', done => {
    component.init().then(() => {
      expect(component.value).toBe(42);
      done();
    });

    replaySubject.next(42);
  });

  it('should call onChange not more than once per change', () => {
    component.init();

    let counter = component.changeCounter
    expect(component.changeCounter).toBe(counter);

    replaySubject.next(21);
    expect(component.changeCounter).toBe(counter + 1);

    replaySubject.next(21);
    expect(component.changeCounter).toBe(counter + 2);
  });

  it('should handle invalid inputs', () => {
    expect(() => {
      component = new BaseReplaySubjectComponentSpec(null);
    }).not.toThrow();
  });
})

class BaseReplaySubjectComponentSpec extends BaseReplayComponent {
  public value: number;
  public changeCounter: number = 0;

  public constructor(private subject: ReplaySubject<number>) {
    super();
  }

  public async init(): Promise<void> {
    return this.listen<number>(this.subject, this.onValueChange.bind(this))
  }

  public onValueChange(value: number): void {
    this.changeCounter++;
    this.value = value
  }
}
