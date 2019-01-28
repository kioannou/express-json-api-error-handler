import { UnknownErrorFormatter } from '../src/error-formatters/unknown-error-formatter';

describe('StringErrorFormatter', () => {
  test('format successfully ', () => {
    const mockError = { 'unknownProperty' : 5555 };
    const expected = {
      "errors": [
        {
          "code": "1000",
          "detail": "More info on meta property!",
          "id": null,
          "links": null,
          "meta": { 'unknownProperty' : 5555 },
          "source": null,
          "status": "500",
          "title": "Internal Error",
        }
      ],
      "jsonapi": {
        "version": "1.0"
      },
      "meta": {}
    };
    expect(UnknownErrorFormatter.format(mockError)).toEqual(expected);
  });
});