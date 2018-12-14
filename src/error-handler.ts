import { checkErrorType } from './error-type-chercker/check-error-type';
import { ErrorTypeEnum } from './error-type-chercker/error-type.enum';
import { getInternalRequestId } from './helpers/get-internal-request-id';
import { getRequestId } from './helpers/get-request-id';

export function errorHandler(error: any, req: any, res: any, next: any) {
  const requestId = getRequestId(res);
  const internalRequestId = getInternalRequestId(res);

  const errorType: ErrorTypeEnum = checkErrorType(error);

  switch (errorType) {
    case ErrorTypeEnum.AxiosError:
      // Do
      break;
    case ErrorTypeEnum.JsonApiError:
      // Do
      break;
    case ErrorTypeEnum.KnownError:
      // Do
      break;
    case ErrorTypeEnum.StringError:
      // Do
      break;
    default:
    // Unknown Error
  }
}
