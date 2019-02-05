import { FormattedError } from '../models/json-api/formatted-error';
import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class UnknownErrorFormatter {
  public static format(error: any): FormattedError {
    const jsonApiError: JsonApiError = new JsonApiError({
      code: '1000',
      detail: 'More info on meta property!',
      meta: error,
      status: '500',
      title: 'Internal Error',
    });

    return JsonApiErrorFormatter.format(jsonApiError);
  }
}
