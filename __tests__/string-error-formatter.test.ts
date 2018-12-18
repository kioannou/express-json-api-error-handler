import { StringErrorFormatter } from '../src/error-formatters/string-error-formatter';

describe('StringErrorFormatter', () => {
  test('format successfully ', () => {
    const mockError = 'String error!';
    const expected = {
      "errors": [
        {
          "code": "1000",
          "detail": "String error!",
          "status": "500",
          "title": "Internal Error (String)"
        }
      ],
      "jsonApiVersion": {
        "version": "1.0"
      },
      "meta": {}
    };
    expect(StringErrorFormatter.format(mockError)).toEqual(expected);
  });
});