import { BasicError } from './basic.error';

export class BadRequestError extends BasicError {
  constructor(message: string, code: number = 1000, title: string = 'Bad Request Error') {
    super(message, code, 400, title);
  }
}
