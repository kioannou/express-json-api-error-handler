import { EventEmitter } from 'events';
import { AxiosErrorFormatter } from './error-formatters/axios-error-formatter';
import { JsonApiErrorFormatter } from './error-formatters/json-api-error-formatter';
import { KnownErrorFormatter } from './error-formatters/known-error-formatter';
import { StringErrorFormatter } from './error-formatters/string-error-formatter';
import { UknownErrorFormatter } from './error-formatters/uknown-error-formatter';
import { checkErrorType } from './error-type-checker/check-error-type';
import { ErrorTypeEnum } from './error-type-checker/error-type.enum';
import { MetaBuilder } from './meta-builder/meta-builder';
import { IErrorHandlerOptions } from './models/error-handler-options.interface';
import { JsonApiWrappedError } from './models/json-api/json-api-formatted-error';
import { Sender } from './sender/sender';

export class ErrorHandler {
  private readonly ERROR_EVENT = 'errorEmission';
  private readonly options: IErrorHandlerOptions | undefined;
  private eventEmitter: EventEmitter;

  private defaultOptions: IErrorHandlerOptions = {
    buildMeta: false,
  };

  constructor(options?: IErrorHandlerOptions) {
    this.options = options || this.defaultOptions;
    this.eventEmitter = new EventEmitter();
  }

  public setErrorEventHandler(cb: any) {
    this.eventEmitter.on(this.ERROR_EVENT, cb);
  }

  public handle(error: any, req: any, res: any, next: any) {
    const errorType: ErrorTypeEnum = checkErrorType(error);

    let formattedError: JsonApiWrappedError;

    switch (errorType) {
      case ErrorTypeEnum.AxiosError:
        formattedError = AxiosErrorFormatter.format(error);
        break;
      case ErrorTypeEnum.JsonApiError:
        formattedError = JsonApiErrorFormatter.format(error);
        break;
      case ErrorTypeEnum.KnownError:
        formattedError = KnownErrorFormatter.format(error);
        break;
      case ErrorTypeEnum.StringError:
        formattedError = StringErrorFormatter.format(error);
        break;
      default:
        formattedError = UknownErrorFormatter.format(error);
    }

    // Calculating meta
    formattedError.meta = this.options && this.options.buildMeta ? MetaBuilder.build(res) : {};

    this.eventEmitter.emit(this.ERROR_EVENT, JSON.stringify(formattedError));

    Sender.sendResponse(res, formattedError);
  }
}
