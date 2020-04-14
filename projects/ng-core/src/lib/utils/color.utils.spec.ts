import { ColorUtils } from './color.utils';
import { tick } from '@angular/core/testing';

describe('ColorUtils', () => {

  let color1 = "rgb(20,60,200)";
  let color2 = "rgba(20,60,200,0.67423)";
  let color3 = "#67DAF0";
  let color4 = "#5567DAF0";
  let color5 = "#F3A";
  let color6 = "#F3A9";
  let color7 = "rgb(200,60,20)";
  let color8 = "rgba(200,60,20,0.98631)";

  it('should convert rgb to hex', () => {
    let actual: string = ColorUtils.rgbToHex([255, 0, 0]);
    expect(actual).toBe('#ff0000');
  });

  it('should mix colors accordingly', () => {
    let mixedColor: number[] = ColorUtils.mixColors([255, 0, 0], [0, 0, 255], .5);
    expect(mixedColor).toEqual([128, 0, 128]);

    mixedColor = ColorUtils.mixColors([255, 0, 0], [0, 0, 255], 1);
    expect(mixedColor).toEqual([255, 0, 0]);

    mixedColor = ColorUtils.mixColors([255, 0, 0], [0, 0, 255], 0);
    expect(mixedColor).toEqual([0, 0, 255]);
  });

  it('should generate basic traffic scale', () => {
    let hex: string = ColorUtils.rgbToHex([229, 53, 68]);
    expect(ColorUtils.getTrafficColorScale(0)).toBe(hex);

    hex = ColorUtils.rgbToHex([255, 226, 28]);
    expect(ColorUtils.getTrafficColorScale(.5)).toBe(hex);

    hex = ColorUtils.rgbToHex([68, 210, 48]);
    expect(ColorUtils.getTrafficColorScale(1)).toBe(hex);
  });

  it('should shade color log (pSBC)', () => {
    let actual: any;

    // logarithmic
    actual = ColorUtils.shadeBlendConvert(0.42, color1); // rgb(20,60,200)
    expect(actual).toBe('rgb(166,171,225)') // 42% Lighter

    actual = ColorUtils.shadeBlendConvert(-0.4, color5); // #F3A
    expect(actual).toBe('#c62884') // 40% Darker

    actual = ColorUtils.shadeBlendConvert(0.42, color8); // rgba(200,60,20,0.98631)
    expect(actual).toBe('rgba(225,171,166,0.986)') // 42% Lighter
  });

  it('should convert color log (shadeBlendConvert)', () => {
    let actual: any;

    // logarithmic
    actual = ColorUtils.shadeBlendConvert(0, color6, "c"); // #F3A9
    expect(actual).toBe('rgba(255,51,170,0.6)');

    actual = ColorUtils.shadeBlendConvert(0.42, color2, "c"); // rgba(20,60,200,0.67423)
    expect(actual).toBe('#a6abe1ac') // 42% Lighter
  });

  it('should blend color log (shadeBlendConvert)', () => {
    let actual: any;

    // logarithmic
    actual = ColorUtils.shadeBlendConvert(-0.5, color2, color8); // rgba(20,60,200,0.67423)
    expect(actual).toBe('rgba(142,60,142,0.83)'); // 50% blend

    actual = ColorUtils.shadeBlendConvert(0.7, color2, color7); // rgba(20,60,200,0.67423)
    expect(actual).toBe('rgba(168,60,111,0.674)'); // 70% blend
  });

  it('should shade color linear (shadeBlendConvert)', () => {
    let actual: any;

    // linear
    actual = ColorUtils.shadeBlendConvert(0.42, color1, false, true); // rgb(20,60,200)
    expect(actual).toBe('rgb(119,142,223)') // 42% Lighter
  });

  it('should convert color linear (shadeBlendConvert)', () => {
    let actual: any;

    // linear
    actual = ColorUtils.shadeBlendConvert(0.42, color2, "c", true); // rgba(20,60,200,0.67423)
    expect(actual).toBe('#778edfac') // 42% Lighter
  });

  it('should blend color linear (shadeBlendConvert)', () => {
    let actual: any;

    // linear
    actual = ColorUtils.shadeBlendConvert(-0.5, color2, color8, true); // rgba(20,60,200,0.67423)
    expect(actual).toBe('rgba(110,60,110,0.83)'); // 50% blend

    actual = ColorUtils.shadeBlendConvert(0.7, color2, color7, true); // rgba(20,60,200,0.67423)
    expect(actual).toBe('rgba(146,60,74,0.674)'); // 70% blend
  });

  it('should check errors (shadeBlendConvert)', () => {
    let actual: any;

    actual = ColorUtils.shadeBlendConvert(0.42, "#FFBAA");
    expect(actual).toBeNull();
  });
})
