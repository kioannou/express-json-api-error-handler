import { IJsonApiError } from './json-api-error.interface';
import { IJsonApiVersion, IJsonApiWrappedError } from './json-api-wrapped-error.interface';

export class JsonApiWrappedError implements IJsonApiWrappedError {
  public errors: IJsonApiError[];
  public meta: any;
  public jsonapi: IJsonApiVersion;

  constructor(errors: IJsonApiError[], jsonApiVersion: IJsonApiVersion, meta?: any) {
    this.errors = errors;
    this.meta = meta || {};
    this.jsonapi = jsonApiVersion;
  }
}
