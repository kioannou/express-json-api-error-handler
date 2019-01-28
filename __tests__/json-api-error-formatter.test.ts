import { JsonApiErrorFormatter } from '../src/error-formatters/json-api-error-formatter';
import { JsonApiError } from '../src/models/json-api/json-api-error.model';

describe('JsonApiErrorFormatter', () => {
  test('format successfully ', () => {

    const mockErrorObj = {
      code: '1200',
      detail: 'Mock error description',
      status: '403',
      title: 'Error 403',
    };

    const mockError = new JsonApiError(mockErrorObj);

    const expected = {
      'errors': [{
        "code": "1200",
        "detail": "Mock error description",
        "id": null,
        "links": null,
        "meta": null,
        "source": null,
        "status": "403",
        "title": "Error 403"
      }], 'jsonapi': { 'version': '1.0' }, 'meta': {}
    };
    expect(JsonApiErrorFormatter.format(mockError)).toEqual(expected);
  });
});