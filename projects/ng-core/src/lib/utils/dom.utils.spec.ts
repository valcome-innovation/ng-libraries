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

  it('should add script async', async () => {
    await DomUtils.loadScriptAsync('jQuery', 'https://code.jquery.com/jquery-3.5.1.slim.min.js', 'src');
    await DomUtils.loadScriptAsync('jQuery', 'https://code.jquery.com/jquery-3.5.1.slim.min.js', 'src');

    const scripts = Array.from(document.getElementsByTagName('script')).filter(e => e.id === 'jQuery');

    expect(scripts.length).toEqual(1);
  });

  it('should get scroll percentage', () => {
    const actual = DomUtils.getScrollPercentage();

    expect(actual).toEqual(1);
  });

  it('should prevent event on body', () => {
    const event: Partial<Event> = {
      target: document.body,
      preventDefault: jasmine.createSpy()
    }

    DomUtils.preventEventOnBody(event as Event);

    expect(event.preventDefault).toHaveBeenCalled();
  });
})
