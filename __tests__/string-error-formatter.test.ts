import { StringErrorFormatter } from '../src/error-formatters/string-error-formatter';

describe('StringErrorFormatter', () => {
  test('format successfully ', () => {
    const mockError = 'String error!';
    const mockMeta = { requestId: '12345' };
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
      "meta": {
        "request_id": "12345"
      }
    };
    expect(StringErrorFormatter.format(mockError, mockMeta)).toEqual(expected);
  });
});