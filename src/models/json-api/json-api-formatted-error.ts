import { JsonApiError } from './json-api-error.model';
import { IJsonApiFormattedError } from './json-api-formatted-error.interface';
import { JsonApiVersion } from './json-api-version.model';

export class JsonApiFormattedError implements IJsonApiFormattedError {
  public errors: JsonApiError[];
  public meta: any;
  public jsonapi: JsonApiVersion;

  constructor(errors: JsonApiError[], jsonApiVersion: JsonApiVersion, meta?: any) {
    this.errors = errors;
    this.meta = meta || {};
    this.jsonapi = jsonApiVersion;
  }
}
