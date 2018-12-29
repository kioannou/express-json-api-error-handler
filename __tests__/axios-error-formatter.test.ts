import { AxiosErrorFormatter } from '../src/error-formatters/axios-error-formatter';
import { IAxiosError } from '../src/models/axios/axios-error.interface';

describe('AxiosErrorFormatter', () => {
  test('format successfully ', () => {
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
  });
});