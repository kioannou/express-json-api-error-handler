import { IAxiosError } from '../models/axios/axios-error.interface';
import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

type NullableJsonApiError = IJsonApiError | null;

export class AxiosErrorFormatter {

  public static format(error: IAxiosError, meta?: any): JsonApiWrappedError {
    // When it's axios. The JSON:APi error usually lies on response object

    const jsonApiError = this.checkJsonApiErrorExists(error);

    if (jsonApiError) {
      return JsonApiErrorFormatter.format(jsonApiError, meta);
    } else {
      return new JsonApiWrappedError(
        [],
        { version: '1.0'},
        {reason: 'No error found in response'}); // TODO: Better fallback if there is no error. Maybe log it internally
    }
  }

  private static checkJsonApiErrorExists(error: IAxiosError): NullableJsonApiError {
    let jsonApiError: NullableJsonApiError = null; // The main error isolated and formatted

    if ((error.response.data.errors) instanceof Array) {
      jsonApiError = error.response.data.errors[0];
    } else {
      jsonApiError = error.response.data.errors;
    }

    return jsonApiError;
  };
}
