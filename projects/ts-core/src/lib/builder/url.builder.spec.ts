import { UrlBuilder } from './url.builder';

describe('UrlBuilder', () => {

  let builder: UrlBuilder;

  it('should build base url', () => {
    builder = new UrlBuilder('https://domain.com');

    const url = builder.getUrl();

    expect(url).toEqual('https://domain.com');
  });

  it('should build url', () => {
    builder = new UrlBuilder('https://domain.com/')
      .addPath('yeah')
      .addPath(1)
      .addQueryParam('test value', false)
      .addQueryParam('nicer=dicer');

    const url = builder.getUrl();
    const path = builder.getPath();
    const query = builder.getSearch();

    expect(url).toEqual('https://domain.com/yeah/1?test%20value=false&nicer=dicer');
    expect(path).toEqual('yeah/1');
    expect(query).toEqual('test%20value=false&nicer=dicer');
  });

  it('should add relative path', () => {
    let relativePaths = [
      '/long path/mid/file.jpg?v=1&test nicer=dicer',
      'long path/mid/file.jpg?v=1&test nicer=dicer'
    ];

    for (const relativePath of relativePaths) {
      const actual = new UrlBuilder('https://domain.com')
        .addFullPath(relativePath)
        .getUrl();

      expect(actual).toEqual('https://domain.com/long%20path/mid/file.jpg?v=1&test%20nicer=dicer');
    }
  });

  it('should add path trimmed', () => {
    const actual = new UrlBuilder('https://domain.com')
      .addPathTrimmed('/yeah')
      .getUrl();

    expect(actual).toEqual('https://domain.com/yeah');
  });
});
