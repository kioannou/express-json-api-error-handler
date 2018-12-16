import { errorHandler } from '../src';
import { IAxiosError } from '../src/models/axios/axios-error.interface';

describe('error-handler', () => {
  test('send the formatted error successfully', () => {
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
      'errors': [
        {
          'code': '1200',
          'detail': 'Mock error description',
          'status': '403',
          'title': 'Error 403',
        },
      ],
      'jsonApiVersion': {
        'version': '1.0',
      },
      'meta': {
        'request_id': '12345',
      },
    };
    const mockRes = { locals: { requestId: 12345 } };
    expect(errorHandler(mockError, {}, mockRes, {})).toEqual(expected);
  });
});