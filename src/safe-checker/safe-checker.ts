import { JsonApiError } from '../models/json-api/json-api-error.model';
import { IJsonApiWrappedError } from '../models/json-api/json-api-wrapped-error.interface';

export class SafeChecker {
  public static checkIsEmpty(formattedError: IJsonApiWrappedError): boolean {
    return !formattedError.errors || !formattedError.errors.length;
  }

  private DEFAULT_ERROR = new JsonApiError({
    code: 1000,
    details:
        "The current mock error acts as a empty placeholder for empty errors body. There was an error that couldn't be handled by the library.",
    status: 500,
    title: 'Unhandled error',
  });

  public getDefaultError(): JsonApiError {
    return this.DEFAULT_ERROR;
  }
}
