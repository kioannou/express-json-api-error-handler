import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class StringErrorFormatter {
  public static format(error: string): JsonApiWrappedError {
    const jsonApiError: IJsonApiError = {
      code: '1000',
      detail: error,
      status: '500',
      title: 'Internal Error (String)',
    };

    return JsonApiErrorFormatter.format(jsonApiError);
  }
}
