import { IJsonApiError } from './json-api-error.interface';

export interface IJsonApiWrappedError {
  errors: IJsonApiError[];
  meta: any;
  jsonapi: IJsonApiVersion;
}

export interface IJsonApiVersion {
  version: string;
}
