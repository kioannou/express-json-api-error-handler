import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class UknownErrorFormatter {
  public static format(error: any): JsonApiWrappedError {
    const jsonApiError: IJsonApiError = {
      code: '1000',
      detail: 'More info on meta property!',
      meta: error,
      status: '500',
      title: 'Internal Error',
    };

    // TODO: Add more logic. Searching more for possible errors

    return JsonApiErrorFormatter.format(jsonApiError);
  }
}
