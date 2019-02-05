import { BasicError } from '../errors/basic.error';
import { FormattedError } from '../models/json-api/formatted-error';
import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class KnownErrorFormatter {
  public static format(error: BasicError): FormattedError {
    // Creating the error object for initializing the JsonApiError
    const errorObj = {
      code: error.code,
      detail: error.message,
      status: error.status,
      title: error.name,
    };
    const jsonApiError: JsonApiError = new JsonApiError(errorObj);
    return JsonApiErrorFormatter.format(jsonApiError);
  }
}
