import { objectHasProperty } from '../util/object-has-property';

export function getInternalRequestId(res: any): string | null {
  let internalRequestId = null;
  if (objectHasProperty(res, 'internalRequestId')) {
    internalRequestId = res.locals.internalRequestId;
  }
  return internalRequestId;
}
