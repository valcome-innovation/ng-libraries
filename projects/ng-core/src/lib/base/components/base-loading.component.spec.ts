import { Subject } from 'rxjs';
import { BaseLoadingComponent } from './base-loading.component';
import { fakeAsync, flush } from '@angular/core/testing';

describe('BaseLoadingComponent', () => {

  let component: BaseLoadingComponentSpec;
  let subject: Subject<void>;

  beforeEach(() => {
    component = new BaseLoadingComponentSpec();
    subject = new Subject<void>();
  })

  it('should set isLoading', fakeAsync(() => {
    expect(component.isLoading).toBe(false);

    component.test(subject);
    expect(component.isLoading).toBe(true);

    subject.next();
    flush();
    expect(component.isLoading).toBe(false);
  }));

  it('should wait for own task', done => {
    component.test(subject).then(() => done());
    subject.next();
  });
});

class BaseLoadingComponentSpec extends BaseLoadingComponent {
  public test(subject: Subject<void>): Promise<void> {
    return this.load(() => new Promise<void>(resolve => subject.subscribe(() => resolve())));
  }
}
