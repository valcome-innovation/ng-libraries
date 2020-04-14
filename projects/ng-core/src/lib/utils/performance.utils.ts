export class PerformanceUtils {

  public static measure(callback: () => void): number {
    let start =  performance.now();
    callback();
    let time = performance.now() - start;

    console.log('Performance: ' + time.toFixed(2) + ' ms');
    return time;
  }
}
