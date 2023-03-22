export class Tap<T extends any[]> {

  public constructor(private callback: (...args: T) => any) {
  }

  public pass(...args: T): T {
    this.callback(...args);

    return args;
  }
}
