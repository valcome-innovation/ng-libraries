export class DisplayValue<V, K = string> {
  public display: K;
  public value: V;
  public disabled: boolean;

  public constructor(display: K, value: V, disabled: boolean = false) {
    this.display = display;
    this.value = value;
    this.disabled = disabled;
  }
}
