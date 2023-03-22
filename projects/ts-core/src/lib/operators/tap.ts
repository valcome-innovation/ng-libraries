export class Tap<T extends any> {

  public constructor(private callback: (...args: any[]) => any) {
  }

  public pass(arg: T): T {
    this.callback(arg);

    return arg;
  }

  public passArray(...args: T[]): T[] {
    this.callback(...args);

    return args;
  }

  public async passAsync(arg: T): Promise<T> {
    await this.callback(arg);

    return arg;
  }

  public async passAsyncArray(...args: T[]): Promise<T[]> {
    await this.callback(...args);

    return args;
  }
}
