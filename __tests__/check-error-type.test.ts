import { checkErrorType } from '../src/error-type-checker/check-error-type';
import { ErrorTypeEnum } from '../src/error-type-checker/error-type.enum';
import { AuthError } from '../src/errors';

describe('checkErrorType', () => {

  test('should check string error type successfully', () => {
    expect(checkErrorType('Message error!')).toEqual(ErrorTypeEnum.StringError);
  });

  test('should check axios error type successfully', () => {
    const axiosTestErrorObj = {
      config: {},
      message: 'Message',
      request: {},
      response: {},
      stack: 'stack',
    };
    expect(checkErrorType(axiosTestErrorObj)).toEqual(ErrorTypeEnum.AxiosError);
  });

  test('should check JSON:API error type successfully', () => {
    const jsonApiTestErrorObj = { 'id': '5555' };
    expect(checkErrorType(jsonApiTestErrorObj)).toEqual(ErrorTypeEnum.JsonApiError);
  });

  test('should check known errors successfully', () => {
    const knownTestError = new AuthError('Unauthorized');
    expect(checkErrorType(knownTestError)).toEqual(ErrorTypeEnum.KnownError);
  });
});