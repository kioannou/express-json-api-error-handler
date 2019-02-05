import { StackedMessageErrorFormatter } from '../src/error-formatters/stacked-message-error-formatter';

describe('StackedMessageErrorFormatter', () => {
  let mockError: any;
  let expected: any;

  beforeAll(() => {
    mockError =  {
      message: 'Error code message',
      stack: "error/stacktrace"
    };

    expected = {
      "errors": [
        {
          "code": null,
          "detail": "Error code message",
          "id": null,
          "links": null,
          "meta": null,
          "source": "error/stacktrace",
          "status": 500,
          "title": "Error",
        }
      ],
      "jsonapi": {
        "version": "1.0"
      },
      "meta": {}
    };
  });

  test('format successfully an stacked message error without response error', () => {
    expect(StackedMessageErrorFormatter.format(mockError)).toEqual(expected);
  });
});