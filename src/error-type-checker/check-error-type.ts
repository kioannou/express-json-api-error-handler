import { checkAxiosError } from './error-type-guards/axios-error.guard';
import { checkKnownError } from './error-type-guards/check-known-error.guard';
import { checkJsonApiError } from './error-type-guards/json-api-error.guard';
import { checkStackedMessageError } from './error-type-guards/stacked-message-error.guard';
import { ErrorType } from './error-type.enum';

export function checkErrorType(error: any): ErrorType {
  let type: ErrorType;

  if (typeof error === 'string' || error instanceof String) {
    type = ErrorType.StringError;
  } else if (checkAxiosError(error)) {
    type = ErrorType.AxiosError;
  } else if (checkStackedMessageError(error)) {
    type = ErrorType.StackedMessageError;
  } else if (checkKnownError(error)) {
    type = ErrorType.KnownError;
  } else if (checkJsonApiError(error)) {
    type = ErrorType.JsonApiError;
  } else {
    type = ErrorType.UnknownError;
  }
  return type;
}
