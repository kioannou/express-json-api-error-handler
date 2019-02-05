import { JsonApiError } from './json-api-error.model';
import { JsonApiVersion } from './json-api-version.model';

// It's the final error schema the library produces as an output.
// It's compliant with the JSON:API error schema
export interface IFormattedError {
  errors: JsonApiError[];
  meta: any;
  jsonapi: JsonApiVersion;
}
