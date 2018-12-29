import { ErrorHandler } from '../src';
import { IAxiosError } from '../src/models/axios/axios-error.interface';
import { next } from './__mocks__/next.mock';
import { req } from './__mocks__/req.mock';
import { res } from './__mocks__/res.mock';

describe('error-handler', () => {
  let mockError: any;
  let expected: any;
  beforeAll(() => {
    mockError = {
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
      stack: {},
    } as IAxiosError;
    expected = {
      'errors': [
        {
          'code': '1200',
          'detail': 'Mock error description',
          'status': '403',
          'title': 'Error 403',
        },
      ],
      'jsonapi': {
        'version': '1.0',
      },
      'meta': {
        'request_id': '12345',
      },
    };
  });

  test('send the formatted error successfully', () => {

    // Spying the result
    const spy = jest.spyOn(res, 'json');

    // Added the the request id to the res
    res.locals.requestId = 12345;
    const errorHandler = new ErrorHandler({ buildMeta: true });
    errorHandler.handle(mockError, req, res, next);
    expect(spy).toHaveBeenCalledWith(expected);
  });

  test('emits successfully the error event', () => {
    res.locals.requestId = 12345;
    const errorHandler = new ErrorHandler({ buildMeta: true });
    errorHandler.setErrorEventHandler((err: any) => {
      const result = JSON.parse(err); // TODO: its stringifies the result ?
      expect(result).toEqual(expected);
    });
    errorHandler.handle(mockError, req, res, next);
  });
});