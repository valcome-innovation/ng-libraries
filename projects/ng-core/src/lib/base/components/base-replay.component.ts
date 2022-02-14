import { ReplaySubject } from 'rxjs';
import { ReplayUtils } from '../../utils/replay.utils';
import { BaseLoadingComponent } from './base-loading.component';

export class BaseReplayComponent extends BaseLoadingComponent {
  protected async listen<T>(replaySubject: ReplaySubject<T>, onChange: (data: T) => void): Promise<void> {
    if (replaySubject) {
      this.addSub(replaySubject.subscribe(value => onChange(value)));
      await ReplayUtils.toPromise<T>(replaySubject);
    }
  }
}
