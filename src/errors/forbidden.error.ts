import { BasicError } from './basic.error';
import { NullableString } from '../types/nullable-string.type';

export class ForbiddenError extends BasicError {
  constructor(message: string, code: NullableString = '1000', title: string = 'Forbidden Error') {
    super(message, code, 403, title);
  }
}
