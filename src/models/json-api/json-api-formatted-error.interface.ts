import { JsonApiError } from './json-api-error.model';
import { JsonApiVersion } from './json-api-version.model';

export interface IJsonApiFormattedError {
  errors: JsonApiError[];
  meta: any;
  jsonapi: JsonApiVersion;
}
