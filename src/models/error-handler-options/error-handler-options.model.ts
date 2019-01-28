import { IErrorHandlerOptions } from './error-handler-options.interface';

export class ErrorHandlerOptions implements IErrorHandlerOptions {
  private static getBuildMeta(obj: any) {
    return obj && obj.hasOwnProperty('buildMeta') ? obj.buildMeta : false;
  }

  public buildMeta: boolean;

  constructor(obj?: any) {
    this.buildMeta = ErrorHandlerOptions.getBuildMeta(obj);
  }
}
