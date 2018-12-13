import { getRequestId } from './helpers/get-request-id';
import { getInternalRequestId } from './helpers/get-internal-request-id';

export function errorHandler(error: any, req: any, res: any, next: any) {
  const requestId = getRequestId(res);
  const internalRequestId = getInternalRequestId(res);
}
