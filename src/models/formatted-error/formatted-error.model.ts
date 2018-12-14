import { IFormattedError } from "./formatted-error.interface";
import { IFormattedErrorDetails } from "./formatted-error-details.interface";

export class FormattedError implements IFormattedError {
    private _details: IFormattedErrorDetails;
    private _errors: any[];

    get errors(): any[] {
        return this._errors;
    }

    set errors(value: any[]) {
        this._errors = value;
    }

    get details(): IFormattedErrorDetails {
        return this._details;
    }

    set details(value: IFormattedErrorDetails) {
        this._details = value;
    }

    constructor(details: IFormattedErrorDetails = {
                    title: 'Unkown',
                    description: 'Unkown',
                    code: 1000,
                    statusCode: 500
                },
                errors: any[] = []) {
        this._details = details;
        this._errors = errors;
    }
}