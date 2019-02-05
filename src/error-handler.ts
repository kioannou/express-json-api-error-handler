import { EventEmitter } from 'events';
import { AxiosErrorFormatter } from './error-formatters/axios-error-formatter';
import { JsonApiErrorFormatter } from './error-formatters/json-api-error-formatter';
import { KnownErrorFormatter } from './error-formatters/known-error-formatter';
import { StringErrorFormatter } from './error-formatters/string-error-formatter';
import { UnknownErrorFormatter } from './error-formatters/unknown-error-formatter';
import { checkErrorType } from './error-type-checker/check-error-type';
import { ErrorType } from './error-type-checker/error-type.enum';
import { MetaBuilder } from './meta-builder/meta-builder';
import { AxiosError } from './models/axios/axios-error.model';
import { ErrorHandlerOptions } from './models/error-handler-options/error-handler-options.model';
import { FormattedError } from './models/json-api/formatted-error';
import { Sender } from './sender/sender';

export class ErrorHandler {
  private readonly ERROR_EVENT = 'errorEmission';
  private readonly options: ErrorHandlerOptions;
  private eventEmitter: EventEmitter;

  private defaultOptions: ErrorHandlerOptions = new ErrorHandlerOptions();

  constructor(options?: ErrorHandlerOptions) {
    this.options = options || this.defaultOptions;
    this.eventEmitter = new EventEmitter();
  }

  public setErrorEventHandler = (cb: any) => {
    this.eventEmitter.on(this.ERROR_EVENT, cb);
  };

  public handle = (error: any, req: any, res: any, next: any) => {
    let formattedError: FormattedError;

    // Checking for the type of the error
    const errorType: ErrorType = checkErrorType(error);

    switch (errorType) {
      case ErrorType.AxiosError:
        const axiosError = new AxiosError(error);
        formattedError = AxiosErrorFormatter.format(axiosError);
        break;
      case ErrorType.JsonApiError:
        formattedError = JsonApiErrorFormatter.format(error);
        break;
      case ErrorType.KnownError:
        formattedError = KnownErrorFormatter.format(error);
        break;
      case ErrorType.StringError:
        formattedError = StringErrorFormatter.format(error);
        break;
      default:
        formattedError = UnknownErrorFormatter.format(error);
    }

    // Calculating meta
    formattedError.meta = this.options && this.options.buildMeta ? MetaBuilder.build(res) : {};

    this.eventEmitter.emit(this.ERROR_EVENT, formattedError);

    Sender.sendResponse(res, formattedError);
  };
}
