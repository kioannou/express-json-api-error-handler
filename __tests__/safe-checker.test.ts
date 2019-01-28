import { IJsonApiFormattedError } from "../src/models/json-api/json-api-formatted-error.interface";
import { SafeChecker } from "../src/safe-checker/safe-checker";

describe('SafeChecker', () => {
    test('checking for empty errors property successfully', () => {
        const mockError: IJsonApiFormattedError = {
            errors: [],
            jsonapi: {
                'version': '1.0'
            },
            meta: {},
        };
        const thereAreNoErrors: boolean = SafeChecker.checkIsEmpty(mockError);
        expect(thereAreNoErrors).toBeTruthy()
    })
});