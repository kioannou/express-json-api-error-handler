export interface IAxiosError {
  config: object;
  message: string;
  request: any;
  response: any;
  stack: string;
}
