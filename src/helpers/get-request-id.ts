import { objectHasProperty } from '../util/object-has-property';

export function getRequestId(res: any): string {
  let requestId = null;
  if (objectHasProperty(res.locals, 'requestId')) {
    requestId = res.locals.requestId;
  }
  return requestId;
}
