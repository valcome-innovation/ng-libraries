export class ImageUtils {
  public static preloadedImages: { [key: string]: HTMLImageElement } = {};

  public static preloadImages(...paths: string[]): void {
    paths.forEach(this.preloadImage.bind(this));
  }

  public static preloadImage(src: string): void {
    let image = new Image();
    image.src = src;
    this.preloadedImages[src] = image;
  }
}
