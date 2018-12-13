import { BasicError } from './basic.error';

export class InternalServerError extends BasicError {
  constructor(message: string, code: number = 1000, title: string = 'Internal Server Error') {
    super(message, 500, code, title);
  }
}