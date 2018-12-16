import { IJsonApiError } from '../models/json-api/json-api-error.interface';
import { JsonApiWrappedError } from '../models/json-api/json-api-formatted-error';

export class JsonApiErrorFormatter {

  public static format(error: IJsonApiError, meta?: any): JsonApiWrappedError {
    return JsonApiErrorFormatter.buildError(error, meta);
  }

  private static createMeta(meta: any): any {
    if(!meta) {
      return {};
    }
    const createdMeta = {} as any;
    if(meta.hasOwnProperty('requestId')) {
      createdMeta.request_id = meta.requestId;
    }
    return createdMeta;
  }

  private static buildError(error: IJsonApiError, meta: any): JsonApiWrappedError {
    // Getting the JSON:API and wrapping it to JSON:API wrapped error
    // TODO: Support more errors in future
    const errors: IJsonApiError[] = [];
    errors.push(error);
    const createdMeta = JsonApiErrorFormatter.createMeta(meta);
    return new JsonApiWrappedError(errors, { version: '1.0' }, createdMeta);
  }
}
