import { AxiosErrorFormatter } from '../src/error-formatters/axios-error-formatter';
import { AxiosError } from '../src/models/axios/axios-error.model';

describe('AxiosErrorFormatter', () => {
  test('format successfully an axios error without response error', () => {

    const mockError =  new AxiosError({
      code: 'ERRORCODE',
      message: 'Error code message',
      request: {},
      response: undefined,
      stack: "error/stacktrace"
    });

    const expected = {
      "errors": [
        {
          "code": "ERRORCODE",
          "detail": "Error code message",
          "id": null,
          "links": null,
          "meta": null,
          "source": "error/stacktrace",
          "status": null,
          "title": "Axios Error: ERRORCODE",
        }
      ],
      "jsonapi": {
        "version": "1.0"
      },
      "meta": {}
    };

    expect(AxiosErrorFormatter.format(mockError)).toEqual(expected);
  });

  test('format successfully an axios error with response error',  () => {
    const mockError =  new AxiosError({
      request: {},
      response: {
        data: {
          errors: {
            code: '1200',
            detail: 'Mock error description',
            status: '403',
            title: 'Error 403',
          },
        },
      },
    });

    const expected = {
      "errors": [
        {
          "code": "1200",
          "detail": "Mock error description",
          "status": "403",
          "title": "Error 403"
        }
      ],
      "jsonapi": {
        "version": "1.0"
      },
      "meta": {}
    };

    expect(AxiosErrorFormatter.format(mockError)).toEqual(expected);
  })
});