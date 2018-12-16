import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiErrorFormatter } from './json-api-error-formatter';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';

export class StringErrorFormatter {
  public static format(error: string, meta?: any): JsonApiWrappedError {

    const jsonApiError: IJsonApiError = {
      code: '1000',
      detail: error,
      status: '500',
      title: 'Internal Error (String)'
    };

    return JsonApiErrorFormatter.format(jsonApiError, meta);

  }
}
