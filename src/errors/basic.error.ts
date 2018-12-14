export class BasicError implements Error {
  public message: string;
  public code: number;
  public status: number;
  public name: string;

  constructor(message: string, code: number, status: number, name: string) {
    this.message = message;
    this.code = code;
    this.status = status;
    this.name = name;
  }
}
