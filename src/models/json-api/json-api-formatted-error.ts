import { JsonApiError } from './json-api-error.model';
import { IJsonApiFormattedError } from './json-api-formatted-error.interface';
import { JsonApiVersion } from './json-api-version.model';

export class JsonApiFormattedError implements IJsonApiFormattedError {
  private static getJsonapi(jsonApiVersion?: JsonApiVersion) {
    return jsonApiVersion || new JsonApiVersion(); // If no version is provided the default one is used
  }

  private static getMeta(meta?: any) {
    return meta || {};
  }

  private static getErrors(errors?: JsonApiError[]) {
    return errors || [];
  }
  public errors: JsonApiError[];
  public meta: any;
  public jsonapi: JsonApiVersion;

  constructor(errors?: JsonApiError[], jsonApiVersion?: JsonApiVersion, meta?: any) {
    this.errors = JsonApiFormattedError.getErrors(errors);
    this.meta = JsonApiFormattedError.getMeta(meta);
    this.jsonapi = JsonApiFormattedError.getJsonapi(jsonApiVersion);
  }
}
