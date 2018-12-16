import { IJsonApiError } from '../../models/json-api/json-api-error.interface';
import { checkKnownError } from './check-known-error.guard';

export function checkJsonApiError(error: any): boolean {
  let isJsonApiError = false;
  const candidateError = error as IJsonApiError;

  const hasRequiredAttributes =
    candidateError.id ||
    candidateError.links ||
    candidateError.status ||
    candidateError.code ||
    candidateError.title ||
    candidateError.detail ||
    candidateError.source ||
    candidateError.meta;

  const isNotAKnownErrorInstance = !checkKnownError(error);

  if (hasRequiredAttributes && isNotAKnownErrorInstance) {
    isJsonApiError = true;
  }
  return isJsonApiError;
}
