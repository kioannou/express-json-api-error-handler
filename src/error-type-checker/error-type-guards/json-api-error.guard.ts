import { IJsonApiError } from '../../models/json-api/json-api-error.interface';
import { checkKnownError } from './check-known-error.guard';

export function checkJsonApiError(error: any): boolean {
  let isJsonApiError = false;
  const candidateError = error as IJsonApiError;

  const hasRequiredAttributes =
    candidateError.hasOwnProperty('id') ||
    candidateError.hasOwnProperty('links') ||
    candidateError.hasOwnProperty('status') ||
    candidateError.hasOwnProperty('code') ||
    candidateError.hasOwnProperty('title') ||
    candidateError.hasOwnProperty('detail') ||
    candidateError.hasOwnProperty('source') ||
    candidateError.hasOwnProperty('meta');

  const isNotAKnownErrorInstance = !checkKnownError(error);

  if (hasRequiredAttributes && isNotAKnownErrorInstance) {
    isJsonApiError = true;
  }
  return isJsonApiError;
}
