import { NullableString } from '../types/nullable-string.type';
import { BasicError } from './basic.error';

export class NotFoundError extends BasicError {
  constructor(message: string, code: NullableString = '1000', title: string = 'Not Found Error') {
    super(message, code, 404, title);
  }
}
