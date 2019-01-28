import { IAxiosError } from '../../models/axios/axios-error.interface';

export function checkAxiosError(error: any): boolean {
  let isAxiosError = false;
  const candidateError = error as IAxiosError;
  if (
    candidateError.hasOwnProperty('config') &&
    candidateError.hasOwnProperty('message') &&
    candidateError.hasOwnProperty('request') &&
    candidateError.hasOwnProperty('response') &&
    candidateError.hasOwnProperty('stack')
  ) {
    isAxiosError = true;
  }
  return isAxiosError;
}
