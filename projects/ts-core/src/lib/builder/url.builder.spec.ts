import { UrlBuilder } from './url.builder';

describe('UrlBuilder', () => {

  let builder: UrlBuilder;

  it('should build base url', () => {
    builder = new UrlBuilder('https://domain.com');

    const url = builder.getUrl();

    expect(url).toEqual('https://domain.com');
  });

  it('should build full url', () => {
    builder = new UrlBuilder('https://domain.com');
    builder.addPath('yeah');
    builder.addPath(1);
    builder.addQueryParam('test value', false);
    builder.addQueryParam('nicer', 'dicer');

    const url = builder.getUrl();
    const path = builder.getPath();
    const query = builder.getQueryParams();

    expect(url).toEqual('https://domain.com/yeah/1?test%20value=false&nicer=dicer');
    expect(path).toEqual('yeah/1');
    expect(query).toEqual('test%20value=false&nicer=dicer');
  });
});
