import { BasicError } from '../errors/basic.error';
import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class KnownErrorFormatter {
  public static format(error: BasicError, meta?: any): JsonApiWrappedError {

    const jsonApiError: IJsonApiError = {};

    if(error.code) {
      jsonApiError.code = error.code;
    }

    if(error.name) {
      jsonApiError.title = error.name;
    }

    if(error.message) {
      jsonApiError.detail = error.message;
    }

    if(error.status) {
      jsonApiError.status = error.status;
    }

    return JsonApiErrorFormatter.format(jsonApiError, meta);

  }
}
