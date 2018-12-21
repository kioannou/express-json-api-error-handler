[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.com/kioannou/express-json-api-error-handler.svg?branch=master)](https://travis-ci.com/kioannou/express-json-api-error-handler)
[![codecov](https://codecov.io/gh/kioannou/express-json-api-error-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/kioannou/express-json-api-error-handler)

# Express JSON:API Error Handler

Error handling middleware for Node/Express applications. All detected errors are finally transformed into JSON:API errors.

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm i express-json-api-error-handler
```

## Features

### `ErrorHandler`
The library exposes the `ErrorHandler` which uses: 
1. The `handle` method as the express middleware
2. The `setErrorEventHandler` method for setting a callback when an error is raised
3. You can initialize with setting options. The available options for now are
```typescript
{
  buildMeta: boolean // To build the meta of the error not. Defaults to false.
}
```

Example on how to initialize the event handler
```typescript
import { ErrorHandler } from `express-json-api-error-handler`;

const errorHandler = new ErrorHandler({ buildMeta: true});
errorHandler.setErrorEventHandler((err) => { console.log(err)})

app.use(errorHandler.handle)
```

## Error structure

The error the handler produces is of the following structure
```javascript

{
      'errors': [
        {
          'code': '1200',
          'detail': 'Mock error description',
          'status': '403',
          'title': 'Error 403',
        },
      ],
      'jsonApiVersion': {
        'version': '1.0',
      },
      'meta': {
        'request_id': '12345',
      },
    };

```


## Errors
The library provides some errors you can use in you app.
The available errors are `AuthError`, `ForbiddenError`, `InternalServerError`, `NotFoundError`.

You can use them like this
```typescript
import { AuthError } from `express-json-api-error-handler`;

next(new AuthError('The user is not authorized!'))

```

## Test

`npm install`

`npm test`


All feedback, issues or suggestions are welcomed :)