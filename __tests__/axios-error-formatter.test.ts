import { AxiosErrorFormatter } from '../src/error-formatters/axios-error-formatter';
import { IAxiosError } from '../src/models/axios/axios-error.interface';

describe('AxiosErrorFormatter', () => {
  test('format successfully an axios error without response error', () => {

    const mockError = {
      code: 'ERRORCODE',
      message: 'Error code message',
      request: {},
      response: undefined,
      stack: "error/stacktrace"
    } as IAxiosError;

    const expected = {
      "errors": [
        {
          "code": "ERRORCODE",
          "detail": "Error code message",
          "status": null,
          "title": "Axios Error: ERRORCODE",
          "id": null,
          "links": null,
          "meta": null,
          "source": "error/stacktrace",
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
    const mockError = {
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
    } as IAxiosError;

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