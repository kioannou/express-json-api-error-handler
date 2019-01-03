import { IAxiosError } from '../models/axios/axios-error.interface';
import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiError } from '../models/json-api/json-api-error.model';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';
import { JsonApiErrorFormatter } from './json-api-error-formatter';

type NullableJsonApiError = IJsonApiError | null;

export class AxiosErrorFormatter {
  public static format(error: IAxiosError): JsonApiWrappedError {
    // When it's axios error: If there is an (JSON:API) error, usually it lies in response.data
    // If there is not handle it as an axios error

    const jsonApiError = this.checkJsonApiErrorExists(error);

    if (jsonApiError) {
      return JsonApiErrorFormatter.format(jsonApiError);
    } else {
      // Create a new JSON:API error and pass it to JsonApiErrorFormatter
      const obj: IJsonApiError = {
        code: error.code,
        detail: error.message,
        source: error.stack,
        title: `Axios Error: ${error.code || 'NOT AVAILABLE'}`,
      };
      const defaultError = new JsonApiError(obj);
      return JsonApiErrorFormatter.format(defaultError);
    }
  }

  private static checkJsonApiErrorExists(error: IAxiosError): NullableJsonApiError {
    let jsonApiError: NullableJsonApiError = null; // The main error isolated and formatted

    if (!error.response || !error.response.hasOwnProperty('data') || !error.response.data.hasOwnProperty('errors')) {
      return jsonApiError; // null
    }

    const isArray = error.response.data.errors instanceof Array;

    if (isArray && !error.response.data.errors.length) {
      return jsonApiError; // null
    }

    jsonApiError = isArray ? error.response.data.errors[0] : error.response.data.errors;

    return jsonApiError;
  }
}
