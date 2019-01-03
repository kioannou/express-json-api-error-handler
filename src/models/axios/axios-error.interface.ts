export interface IAxiosError {
  code?: string;
  config: object;
  message: string;
  request: any;
  response: any;
  stack: string;
}
