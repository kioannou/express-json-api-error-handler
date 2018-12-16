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
    const mockMeta = { requestId: '12345' };
    const expected = {
      "errors": [
        {
          "code": "1200",
          "detail": "Mock error description",
          "status": "403",
          "title": "Error 403"
        }
      ],
      "jsonApiVersion": {
        "version": "1.0"
      },
      "meta": {
        "request_id": "12345"
      }
    };
    expect(AxiosErrorFormatter.format(mockError, mockMeta)).toEqual(expected);
  });
});