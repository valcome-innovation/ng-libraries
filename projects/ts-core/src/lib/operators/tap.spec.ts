import { Tap } from './tap';

describe('Tap', () => {

  it('should tap', async () => {
    let result = -1;
    const callback = (arg: number) => result = arg;

    await Promise.resolve(0)
      .then(n => new Tap(callback).pass(n));

    expect(result).toBe(0);
  });
});
