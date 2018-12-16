import { IJsonApiError } from '../../../lib/models/json-api/json-api-error.interface';

export interface IJsonApiWrappedError {
  errors: IJsonApiError[];
  meta: any;
  jsonApiVersion: IJsonApiVersion;
}

export interface IJsonApiVersion {
  version: string;
}