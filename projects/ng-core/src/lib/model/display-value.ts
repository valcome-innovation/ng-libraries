export class DisplayValue<T> {
  public display: string;
  public value: T;
  public disabled: boolean;

  public constructor(display: string, value: T, disabled: boolean = false) {
    this.display = display;
    this.value = value;
    this.disabled = disabled;
  }
}
