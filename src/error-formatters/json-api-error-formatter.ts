import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';

export class JsonApiErrorFormatter {
  public static format(error: IJsonApiError): JsonApiWrappedError {
    return JsonApiErrorFormatter.buildError(error);
  }

  private static buildError(error: IJsonApiError): JsonApiWrappedError {
    // Getting the JSON:API and wrapping it to JSON:API wrapped error
    // TODO: Support more errors in future
    const errors: IJsonApiError[] = [];
    errors.push(error);
    return new JsonApiWrappedError(errors, { version: '1.0' });
  }
}
