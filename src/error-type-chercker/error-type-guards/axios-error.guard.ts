import { IAxiosError } from '../../models/axios/axios-error.interface';

export function checkAxiosError(error: any): boolean {
  let isAxiosError = false;
  const candidateError = error as IAxiosError;
  if (
    candidateError.config &&
    candidateError.message &&
    candidateError.request &&
    candidateError.response &&
    candidateError.stack
  ) {
    isAxiosError = true;
  }
  return isAxiosError;
}
