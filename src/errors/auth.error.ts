import { BasicError } from "./basic.error";

export class AuthError extends BasicError {
  constructor(message: string, code: number = 1000, title: string = 'Authentication Error') {
    super(message, 404, code, title);
  }
}
