import { BasicError } from '../errors/basic.error';
import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiFormattedError } from '../models/json-api/json-api-formatted-error';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class KnownErrorFormatter {
  public static format(error: BasicError): JsonApiFormattedError {

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
