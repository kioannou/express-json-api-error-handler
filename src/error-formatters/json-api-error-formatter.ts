import { FormattedError } from "../models/formatted-error/formatted-error.model";
import { IJsonApiError } from "../models/json-api/json-api-error.interface";
import { IFormattedErrorDetails } from "../models/formatted-error/formatted-error-details.interface";

export class JsonApiErrorFormatter {
    public format(error: IJsonApiError): FormattedError {
        const details: IFormattedErrorDetails = this.buildDetails(error);
        const errors: any[] = this.buildErrors(error);

        return new FormattedError(details, errors);
    }

    private buildDetails(error: IJsonApiError): IFormattedErrorDetails {
        return undefined;
    }

    private buildErrors(error: IJsonApiError): any[] {
        return [];
    }
}