import { IAxiosError } from './axios-error.interface';

export class AxiosError implements IAxiosError {
  private static getCode(obj: any) {
    return obj && obj.hasOwnProperty('code') ? obj.code : '1000';
  }

  private static getConfig(obj: any) {
    return obj && obj.hasOwnProperty('config') ? obj.config : {};
  }

  private static getMessage(obj: any) {
    return obj && obj.hasOwnProperty('message') ? obj.message : 'No available message';
  }

  private static getRequest(obj: any) {
    return obj && obj.hasOwnProperty('request') ? obj.request : {};
  }

  private static getResponse(obj: any) {
    return obj && obj.hasOwnProperty('response') ? obj.response : {};
  }

  private static getStack(obj: any) {
    return obj && obj.hasOwnProperty('stack') ? obj.stack : 'No available stack';
  }

  public code: string;
  public config: object;
  public message: string;
  public request: any;
  public response: any;
  public stack: string;

  constructor(obj?: any) {
    this.code = AxiosError.getCode(obj);
    this.config = AxiosError.getConfig(obj);
    this.message = AxiosError.getMessage(obj);
    this.request = AxiosError.getRequest(obj);
    this.response = AxiosError.getResponse(obj);
    this.stack = AxiosError.getStack(obj);
  }
}
