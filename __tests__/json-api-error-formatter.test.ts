import { JsonApiErrorFormatter } from '../src/error-formatters/json-api-error-formatter';

describe('JsonApiErrorFormatter', () => {
  test('format successfully ', () => {
    const mockError = {
      code: '1200',
      description: 'Mock error description',
      statusCode: '403',
      title: 'Error 403',
    };

    const expected = {
      'errors': [{
        'code': '1200',
        'description': 'Mock error description',
        'statusCode': '403',
        'title': 'Error 403',
      }], 'jsonapi': { 'version': '1.0' }, 'meta': {}
    };
    expect(JsonApiErrorFormatter.format(mockError)).toEqual(expected);
  });
});