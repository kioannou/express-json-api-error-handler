import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiFormattedError } from '../models/json-api/json-api-formatted-error';

export class JsonApiErrorFormatter {
  public static format(error: JsonApiError): JsonApiFormattedError {
    return JsonApiErrorFormatter.buildError(error);
  }

  private static buildError(error: JsonApiError): JsonApiFormattedError {
    const errors: JsonApiError[] = [];
    errors.push(error);
    return new JsonApiFormattedError(errors, { version: '1.0' });
  }
}
