import { KnownErrorFormatter } from '../src/error-formatters/known-error-formatter';
import { AuthError } from '../src/errors';

describe('KnownErrorFormatter', () => {
  test('format successfully ', () => {
    const mockError = new AuthError('Unauthorized user!', '1000');
    const expected = {
      "errors": [
        {
          "code": "1000",
          "detail": "Unauthorized user!",
          "status": 404,
          "title": "Authentication Error"
        }
      ],
      "jsonApiVersion": {
        "version": "1.0"
      },
      "meta": {}
    };
    expect(KnownErrorFormatter.format(mockError)).toEqual(expected);
  });
});