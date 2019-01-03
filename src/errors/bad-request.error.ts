import { NullableString } from '../types/nullable-string.type';
import { BasicError } from './basic.error';

export class BadRequestError extends BasicError {
  constructor(message: string, code: NullableString = '1000', title: string = 'Authentication Error') {
    super(message, code, 400, title);
  }
}
