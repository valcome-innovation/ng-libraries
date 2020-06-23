export class DisplayValue {
  public display: string;
  public value: any;
  public disabled: boolean;

  public constructor(display: string, value: any, disabled: boolean = false) {
    this.display = display;
    this.value = value;
    this.disabled = disabled;
  }
}
