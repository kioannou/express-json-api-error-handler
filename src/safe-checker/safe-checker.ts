import { JsonApiError } from "../models/json-api/json-api-error.model";
import { IJsonApiWrappedError } from "../models/json-api/json-api-wrapped-error.interface";

export class SafeChecker {
    private DEFAULT_ERROR = new JsonApiError({
        status: 500,
        title: 'Unhandled error',
        details: 'The current mock error acts as a empty placeholder for empty errors body. There was an error that couldn\'t be handled by the library.',
        code: 1000
    });

    public static checkIsEmpty(formattedError: IJsonApiWrappedError): boolean {
        return !formattedError.errors || !formattedError.errors.length;
    }

    public getDefaultError(): JsonApiError {
        return this.DEFAULT_ERROR;
    }
}