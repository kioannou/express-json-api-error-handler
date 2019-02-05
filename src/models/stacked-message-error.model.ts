// It's a rare kind of error that rarely appears. E.g the TypeError is of this form
export class StackedMessageError {
  private static getMessage(obj: any) {
    return obj && obj.hasOwnProperty('message') ? obj.message : null;
  }

  private static getStack(obj: any) {
    return obj && obj.hasOwnProperty('stack') ? obj.stack : null;
  }

  public message: string;
  public stack: string;

  constructor(obj?: any) {
    this.message = StackedMessageError.getMessage(obj);
    this.stack = StackedMessageError.getStack(obj);
  }
}
