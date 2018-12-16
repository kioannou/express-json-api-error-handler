import { BasicError } from './basic.error';
import { NullableString } from '../types/nullable-string.type';

export class AuthError extends BasicError {
  constructor(message: string, code: NullableString = '1000', title: string = 'Authentication Error') {
    super(message, code, 404, title);
  }
}
