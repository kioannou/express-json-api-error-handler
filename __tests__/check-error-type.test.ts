import { checkErrorType } from "../src/error-type-chercker/check-error-type";
import { ErrorTypeEnum } from "../src/error-type-chercker/error-type.enum";
import { AuthError } from "../src/errors";

describe('checkErrorType', () => {
    beforeAll(() => {
    });

    test('should check string error type successfully', () => {
        expect(checkErrorType('Message error!')).toEqual(ErrorTypeEnum.StringError);
    });

    test('should check axios error type successfully', () => {
        let axiosTestErrorObj;
        expect(checkErrorType(axiosTestErrorObj)).toEqual(ErrorTypeEnum.AxiosError);
    });

    test('should check JSON:API error type successfully', () => {
        let jsonApiTestErrorObj;
        expect(checkErrorType(jsonApiTestErrorObj)).toEqual(ErrorTypeEnum.JsonApiError);
    });

    test('should check known errors successfully', () => {
        const knownTestError = new AuthError('Unauthorized');
        expect(checkErrorType(knownTestError)).toEqual(ErrorTypeEnum.KnownError);
    });
});