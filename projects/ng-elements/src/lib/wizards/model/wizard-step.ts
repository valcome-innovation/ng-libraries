export class WizardStep {
  public title: string;
  public content: string;
  public image: HTMLImageElement;

  public constructor(fields: {
    title?: string,
    content?: string,
    image?: HTMLImageElement
  }) {
    Object.assign(this, fields);
  }
}
