import { getRequestId } from '../helpers/get-request-id';

export class MetaBuilder {
  public static build(res: any): any {
    const meta: any = {};

    // Adding the request id
    meta.request_id = getRequestId(res).toString();

    return meta;
  }
}
