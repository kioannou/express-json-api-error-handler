import { AxiosErrorFormatter } from './error-formatters/axios-error-formatter';
import { JsonApiErrorFormatter } from './error-formatters/json-api-error-formatter';
import { KnownErrorFormatter } from './error-formatters/known-error-formatter';
import { StringErrorFormatter } from './error-formatters/string-error-formatter';
import { UknownErrorFormatter } from './error-formatters/uknown-error-formatter';
import { checkErrorType } from './error-type-checker/check-error-type';
import { ErrorTypeEnum } from './error-type-checker/error-type.enum';
import { JsonApiWrappedError } from './models/json-api/json-api-formatted-error';
import { Sender } from './sender/sender';
import { MetaBuilder } from './meta-builder/meta-builder';

export function errorHandler(error: any, req: any, res: any, next: any) {
  const errorType: ErrorTypeEnum = checkErrorType(error);

  let formattedError: JsonApiWrappedError;

  switch (errorType) {
    case ErrorTypeEnum.AxiosError:
      formattedError = AxiosErrorFormatter.format(error);
      break;
    case ErrorTypeEnum.JsonApiError:
      formattedError = JsonApiErrorFormatter.format(error);
      break;
    case ErrorTypeEnum.KnownError:
      formattedError = KnownErrorFormatter.format(error);
      break;
    case ErrorTypeEnum.StringError:
      formattedError = StringErrorFormatter.format(error);
      break;
    default:
      formattedError = UknownErrorFormatter.format(error);
  }

  // Calculating meta
  formattedError.meta = MetaBuilder.build(res);

  Sender.sendResponse(res, formattedError);
}
