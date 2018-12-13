import { ErrorTypeEnum } from './error-type.enum';
import { checkJsonApiError } from './error-type-guards/json-api-error.guard';
import { checkAxiosError } from './error-type-guards/axios-error.guard';
import { checkKnownError } from './error-type-guards/check-known-error.guard';

export function checkErrorType(error: any): ErrorTypeEnum {
  let type: ErrorTypeEnum;

  if (typeof error === 'string' || error instanceof String) {
    type = ErrorTypeEnum.StringError;
  } else if (checkJsonApiError(error)) {
    type = ErrorTypeEnum.JsonApiError;
  } else if (checkAxiosError(error)) {
    type = ErrorTypeEnum.AxiosError;
  } else if (checkKnownError(error)) {
    type = ErrorTypeEnum.KnownError;
  } else {
    type = ErrorTypeEnum.UnknownError;
  }
  return type;
}
