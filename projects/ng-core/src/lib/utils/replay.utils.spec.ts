import { ReplaySubject } from 'rxjs';
import { ReplayUtils } from './replay.utils';

describe('ReplayUtils', () => {

  let replaySubject: ReplaySubject<string>;

  beforeEach(() => {
    replaySubject = new ReplaySubject<string>(1);
  })

  it('should create promise from replay subject (await)', async () => {
    replaySubject.next('yeah');

    const actual = await ReplayUtils.toPromise<string>(replaySubject);

    expect(actual).toEqual('yeah');
  });

  it('should create promise from replay subject (then)', done => {
    ReplayUtils.toPromise<string>(replaySubject).then(value => {
      expect(value).toEqual('test');
      done();
    });

    replaySubject.next('test');
  });
})
