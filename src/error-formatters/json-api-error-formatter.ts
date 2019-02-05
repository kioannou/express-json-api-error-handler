import { FormattedError } from '../models/json-api/formatted-error';
import { JsonApiError } from '../models/json-api/json-api-error.model';

export class JsonApiErrorFormatter {
  public static format(error: JsonApiError): FormattedError {
    return JsonApiErrorFormatter.buildError(error);
  }

  private static buildError(error: JsonApiError): FormattedError {
    const errors: JsonApiError[] = [];
    errors.push(error);
    return new FormattedError(errors, { version: '1.0' });
  }
}
