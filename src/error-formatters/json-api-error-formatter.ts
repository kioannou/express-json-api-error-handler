import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiFormattedError } from '../models/json-api/json-api-formatted-error';

export class JsonApiErrorFormatter {
  public static format(error: JsonApiError): JsonApiFormattedError {
    return JsonApiErrorFormatter.buildError(error);
  }

  private static buildError(error: JsonApiError): JsonApiFormattedError {
    // Getting the JSON:API and wrapping it to JSON:API wrapped error
    // TODO: Support more errors in future
    const errors: IJsonApiError[] = [];
    errors.push(error);
    return new JsonApiFormattedError(errors, { version: '1.0' });
  }
}
