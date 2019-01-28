import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiFormattedError } from '../models/json-api/json-api-formatted-error';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class StringErrorFormatter {
  public static format(error: string): JsonApiFormattedError {
    const jsonApiError: JsonApiError = new JsonApiError({
      code: '1000',
      detail: error,
      status: '500',
      title: 'Internal Error (String)',
    });
    return JsonApiErrorFormatter.format(jsonApiError);
  }
}
