import { NullableString } from '../types/nullable-string.type';

export class BasicError implements Error {
  public message: string;
  public code: NullableString;
  public status: number;
  public name: string;

  constructor(message: string, code: number, status: number, name: string) {
    this.message = message;
    this.code = code ? code.toString() : null;
    this.status = status;
    this.name = name;
  }
}
