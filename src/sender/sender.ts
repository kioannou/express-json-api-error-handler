import { JsonApiFormattedError } from '../models/json-api/json-api-formatted-error';

export class Sender {
  public static sendResponse(res: any, err: JsonApiFormattedError): void {
    const status = err.errors.length ? err.errors[0].status : 500;

    return res
      .header('Content-Type', 'application/vnd.api+json')
      .status(status)
      .json(err)
      .end();
  }
}
