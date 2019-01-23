import { BasicError } from './basic.error';

export class ForbiddenError extends BasicError {
  constructor(message: string, code: number = 1000, title: string = 'Forbidden Error') {
    super(message, code, 403, title);
  }
}
