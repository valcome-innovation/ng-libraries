import { BaseSubscriptionComponent } from './base-subscription.component';
import { ReplaySubject } from 'rxjs';
import { ReplayUtils } from '../../utils/replay.utils';

export class BaseReplayComponent extends BaseSubscriptionComponent {
  protected async listen<T>(replaySubject: ReplaySubject<T>, onChange: (data: T) => void): Promise<void> {
    if (replaySubject && onChange) {
      this.addSub(replaySubject.subscribe(value => onChange(value)));
      await ReplayUtils.toPromise<T>(replaySubject);
    }
  }
}
