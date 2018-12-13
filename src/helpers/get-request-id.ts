import { objectHasProperty } from '../util/object-has-property';

export function getRequestId(res: any): string[] {
  let requestIdArray = [];
  if (objectHasProperty(res, 'requestId')) {
    requestIdArray = res.locals.requestId;
  }
  return requestIdArray;
}
