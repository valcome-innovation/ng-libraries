export class WizardStep {
  public title?: string;
  public content?: string;
  public image?: HTMLImageElement;

  public constructor(title?: string,
                     content?: string,
                     image?: HTMLImageElement) {
    this.title = title;
    this.content = content;
    this.image = image;
  }
}
