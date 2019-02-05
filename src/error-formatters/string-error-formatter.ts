import { FormattedError } from '../models/json-api/formatted-error';
import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class StringErrorFormatter {
  public static format(error: string): FormattedError {
    const jsonApiError: JsonApiError = new JsonApiError({
      code: '1000',
      detail: error,
      status: '500',
      title: 'Internal Error (String)',
    });
    return JsonApiErrorFormatter.format(jsonApiError);
  }
}
