import { BaseComponent } from './base.component';
import { BaseBehaviorSubjectComponent } from './base-behavoir-subject.component';
import { BaseSubscriptionComponent } from './base-subscription.component';

describe('BaseComponent', () => {
  let baseComponent: BaseComponent;

  beforeEach(() => {
    baseComponent = new BaseComponent()
  });

  it('should inherit all base components', () => {
    expect(baseComponent instanceof BaseBehaviorSubjectComponent).toBeTruthy();
    expect(baseComponent instanceof BaseSubscriptionComponent).toBeTruthy();
  });
})
