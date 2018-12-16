import { JsonApiErrorFormatter } from '../src/error-formatters/json-api-error-formatter';

describe('JsonApiErrorFormatter', () => {
  test('format successfully ', () => {
    const mockError = {
      code: '1200',
      description: 'Mock error description',
      statusCode: '403',
      title: 'Error 403',
    };

    const mockMeta = { requestId: '12345' };

    const expected = {
      'errors': [{
        'code': '1200',
        'description': 'Mock error description',
        'statusCode': '403',
        'title': 'Error 403',
      }], 'jsonApiVersion': { 'version': '1.0' }, 'meta': { 'request_id': '12345' }
    };
    expect(JsonApiErrorFormatter.format(mockError, mockMeta)).toEqual(expected);
  });
});