import { errorHandler } from '../src';
import { IAxiosError } from '../src/models/axios/axios-error.interface';
import { next } from './__mocks__/next.mock';
import { req } from './__mocks__/req.mock';
import { res } from './__mocks__/res.mock';

describe('error-handler', () => {
  test('send the formatted error successfully', () => {

    // The mock error
    const mockError = {
      config: {},
      message: {},
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
      stack : {},
    } as IAxiosError;

    // The expected error
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

    // Spying the result
    const spy = jest.spyOn(res, 'json');

    // Added the the request id to the res
    res.locals.requestId = 12345;
    errorHandler(mockError, req, res, next);
    expect(spy).toHaveBeenCalledWith(expected);
  });
});