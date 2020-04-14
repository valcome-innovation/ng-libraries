export class PerformanceUtils {

  public static async measure(callback: () => void | Promise<void>): Promise<number> {
    const start =  performance.now();
    await callback();
    const time = performance.now() - start;

    console.log('Performance: ' + time.toFixed(2) + ' ms');
    return time;
  }
}
