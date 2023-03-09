export class DomUtils {

  // https://gist.github.com/davidtheclark/5515733#gistcomment-2113205
  public static isVisibleInViewport(el: any): boolean {
    if (window == null || !document.body.contains(el)) {
      return false;
    }

    const rect = el.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }

  // https://gist.github.com/davidtheclark/5515733#file-iselementinviewport-js-L10
  public static isFullyVisibleInViewport(el: any): boolean {
    if (window == null || !document.body.contains(el)) {
      return false;
    }

    let rect = el.getBoundingClientRect();
    return (
      rect.top != null &&
      rect.left != null &&
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  public static loadScriptAsync(id: string,
                                srcOrScript: string,
                                scriptType: 'src' | 'plainScript',
                                defer: boolean = false): Promise<HTMLScriptElement> {
    const element = document.getElementById(id);

    if (!element || !(element instanceof HTMLScriptElement)) {
      return new Promise((resolve, reject) => {
        const headTag = document.getElementsByTagName('head')[0];
        const scriptHTML = document.createElement('script');

        scriptHTML.id = id;
        scriptHTML.defer = defer;
        scriptHTML.type = 'text/javascript';

        if (scriptType === 'src') {
          scriptHTML.src = srcOrScript;
          scriptHTML.onload = () => resolve(scriptHTML);
          scriptHTML.onerror = () => reject();
        } else {
          scriptHTML.innerHTML = srcOrScript;
          resolve(scriptHTML);
        }

        if (headTag) {
          headTag.appendChild(scriptHTML);
        } else {
          reject();
        }
      });
    } else {
      return Promise.resolve(element);
    }
  }

  // https://stackoverflow.com/a/8028584/12237560
  public static getScrollPercentage(): number {
    const html = document.documentElement;
    const body = document.body;
    const scrollTop = 'scrollTop';
    const scrollHeight = 'scrollHeight';

    const scrollPosition = (html[scrollTop] || body[scrollTop]);
    const availableScroll = (html[scrollHeight] || body[scrollHeight]) - html.clientHeight;

    if (availableScroll > 0) {
      return scrollPosition / availableScroll;
    } else {
      return 1;
    }
  }

  public static preventEventOnBody(event?: Event): void {
    DomUtils.preventEventOn(event, document.body);
  }

  public static preventEventOn(event: Event | undefined, target: HTMLElement): void {
    if (event && event.target == target) {
      event.preventDefault();
    }
  }
}
