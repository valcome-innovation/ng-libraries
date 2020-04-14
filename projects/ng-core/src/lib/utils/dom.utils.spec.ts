import { DomUtils } from './dom.utils';

describe('DomUtils', () => {

  let div: HTMLDivElement;

  beforeEach(() => {
    div = document.createElement("div");
    div.appendChild(document.createTextNode("Test Div"));
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.position = 'fixed';
  });

  it('should fully be visible in viewport', () => {
    div.style.top = '0';
    div.style.left = '0';
    document.body.append(div);

    expect(DomUtils.isVisibleInViewport(div)).toBeTruthy();
    expect(DomUtils.isFullyVisibleInViewport(div)).toBeTruthy();
  });

  it('should partly be in viewport', () => {
    div.style.top = '-10px';
    div.style.left = '0';
    document.body.append(div);

    expect(DomUtils.isVisibleInViewport(div)).toBeTruthy();
    expect(DomUtils.isFullyVisibleInViewport(div)).toBeFalsy();
  });

  it('should not be visible in viewport', () => {
    div.style.top = '0';
    div.style.left = '-200px';
    document.body.append(div);

    expect(DomUtils.isVisibleInViewport(div)).toBeFalse();
    expect(DomUtils.isFullyVisibleInViewport(div)).toBeFalse();
  });

  it('should not be in viewport', () => {
    div.style.top = '0';
    div.style.left = '0';

    expect(DomUtils.isVisibleInViewport(div)).toBeFalse();
    expect(DomUtils.isFullyVisibleInViewport(div)).toBeFalse();
  });
})
