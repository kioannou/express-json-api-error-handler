import { BasicError } from '../../errors/basic.error';

export function checkKnownError(error: any): boolean {
  let isKnownError = false;
  const candidateError = error as BasicError;
  if (
    candidateError.hasOwnProperty('status') &&
    candidateError.hasOwnProperty('code') &&
    candidateError.hasOwnProperty('name') &&
    candidateError.hasOwnProperty('message')
  ) {
    isKnownError = true;
  }
  return isKnownError;
}
