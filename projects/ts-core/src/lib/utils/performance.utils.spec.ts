import { PerformanceUtils } from './performance.utils';

describe('PerformanceUtils', () => {
  it('should measure time', async () => {
    const wait: number = 100;
    const time: number = await PerformanceUtils.measure(() => sleep(wait));
    expect(time).toBeGreaterThan(wait);
  });

  function sleep(milliseconds: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, milliseconds));
  }
});
