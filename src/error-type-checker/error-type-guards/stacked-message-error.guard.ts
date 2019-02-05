import { StackedMessageError } from '../../models/stacked-message-error.model';

export function checkStackedMessageError(error: any): boolean {
  let isStackedMessageError = false;
  const candidateError = error as StackedMessageError;
  if (candidateError.hasOwnProperty('message') && candidateError.hasOwnProperty('stack')) {
    isStackedMessageError = true;
  }
  return isStackedMessageError;
}
