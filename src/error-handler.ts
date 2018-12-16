import { AxiosErrorFormatter } from './error-formatters/axios-error-formatter';
import { JsonApiErrorFormatter } from './error-formatters/json-api-error-formatter';
import { KnownErrorFormatter } from './error-formatters/known-error-formatter';
import { StringErrorFormatter } from './error-formatters/string-error-formatter';
import { UknownErrorFormatter } from './error-formatters/uknown-error-formatter';
import { checkErrorType } from './error-type-checker/check-error-type';
import { ErrorTypeEnum } from './error-type-checker/error-type.enum';
import { getRequestId } from './helpers/get-request-id';
import { JsonApiWrappedError } from './models/json-api/json-api-formatted-error';
import { Sender } from './sender/sender';

export function errorHandler(error: any, req: any, res: any, next: any) {
  const requestId = getRequestId(res);

  const errorType: ErrorTypeEnum = checkErrorType(error);

  let formattedError: JsonApiWrappedError;
  const meta = { requestId }; // TODO: Pass the meta as options externally

  switch (errorType) {
    case ErrorTypeEnum.AxiosError:
      formattedError = AxiosErrorFormatter.format(error, meta);
      break;
    case ErrorTypeEnum.JsonApiError:
      formattedError = JsonApiErrorFormatter.format(error, meta);
      break;
    case ErrorTypeEnum.KnownError:
      formattedError = KnownErrorFormatter.format(error, meta);
      break;
    case ErrorTypeEnum.StringError:
      formattedError = StringErrorFormatter.format(error, meta);
      break;
    default:
      formattedError = UknownErrorFormatter.format(error, meta);
  }

  Sender.sendResponse(res, formattedError);
}
