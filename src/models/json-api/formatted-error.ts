import { IFormattedError } from './formatted-error.interface';
import { JsonApiError } from './json-api-error.model';
import { JsonApiVersion } from './json-api-version.model';

export class FormattedError implements IFormattedError {
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
    this.errors = FormattedError.getErrors(errors);
    this.meta = FormattedError.getMeta(meta);
    this.jsonapi = FormattedError.getJsonapi(jsonApiVersion);
  }
}
