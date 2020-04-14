import { ImageUtils } from './image.utils';

const obi: string = 'https://image.film.at/images/cfs_landscape_1864w_1049h/4078914/ewan-mcgregor_obi-wan.jpg';
const anakin: string = 'https://i.pinimg.com/originals/e0/ff/9b/e0ff9b2abf63c32040647a128d81eff2.jpg';

describe('ImageUtils', () => {
  beforeEach(() => ImageUtils.preloadedImages = {});

  it('should preload a single image', () => {
    ImageUtils.preloadImage(obi);
    expect(Object.keys(ImageUtils.preloadedImages).length).toEqual(1);
    expect(ImageUtils.preloadedImages[obi]).toBeDefined();
    expect(ImageUtils.preloadedImages[obi]).toBeInstanceOf(Image);
    expect(ImageUtils.preloadedImages[obi].src).toEqual(obi);
  });

  it('should preload multiple images', () => {
    ImageUtils.preloadImages(obi, anakin);
    expect(Object.keys(ImageUtils.preloadedImages).length).toEqual(2);

    expect(ImageUtils.preloadedImages[obi]).toBeDefined();
    expect(ImageUtils.preloadedImages[obi]).toBeInstanceOf(Image);
    expect(ImageUtils.preloadedImages[obi].src).toEqual(obi);

    expect(ImageUtils.preloadedImages[anakin]).toBeDefined();
    expect(ImageUtils.preloadedImages[anakin]).toBeInstanceOf(Image);
    expect(ImageUtils.preloadedImages[anakin].src).toEqual(anakin);
  });

  it('should preload images only once', () => {
    ImageUtils.preloadImages(obi, obi, anakin, anakin);
    expect(Object.keys(ImageUtils.preloadedImages).length).toEqual(2);
  });
});
