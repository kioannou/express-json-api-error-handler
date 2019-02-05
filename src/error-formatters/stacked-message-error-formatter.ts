import { FormattedError } from '../models/json-api/formatted-error';
import { JsonApiError } from '../models/json-api/json-api-error.model';
import { StackedMessageError } from '../models/stacked-message-error.model';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

export class StackedMessageErrorFormatter {
  public static format(error: StackedMessageError): FormattedError {
    const errorObj = {
      detail: error.message,
      source: error.stack,
      status: 500,
      title: 'Error',
    };
    const jsonApiError: JsonApiError = new JsonApiError(errorObj);
    return JsonApiErrorFormatter.format(jsonApiError);
  }
}
