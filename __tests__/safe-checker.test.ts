import { SafeChecker } from "../src/safe-checker/safe-checker";
import { IJsonApiFormattedError } from "../src/models/json-api/json-api-formatted-error.interface";

describe('SafeChecker', () => {
    test('checking for empty errors property successfully', () => {
        const mockError: IJsonApiFormattedError = {
            errors: [],
            meta: {},
            jsonapi: {
                'version': '1.0'
            }
        };
        const thereAreNoErrors: boolean = SafeChecker.checkIsEmpty(mockError);
        expect(thereAreNoErrors).toBeTruthy()
    })
});