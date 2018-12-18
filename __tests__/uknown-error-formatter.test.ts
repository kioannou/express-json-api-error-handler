import { UknownErrorFormatter } from '../src/error-formatters/uknown-error-formatter';

describe('StringErrorFormatter', () => {
  test('format successfully ', () => {
    const mockError = { 'unknownProperty' : 5555 };
    const expected = {
      "errors": [
        {
          "code": "1000",
          "detail": "More info on meta property!",
          "meta": { 'unknownProperty' : 5555 },
          "status": "500",
          "title": "Internal Error",
        }
      ],
      "jsonApiVersion": {
        "version": "1.0"
      },
      "meta": {}
    };
    expect(UknownErrorFormatter.format(mockError)).toEqual(expected);
  });
});