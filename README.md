<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  </head>
  <body>
    <div align="center">
        <h1>Decoder Parameters</h1>
        <br>
        <br>
        <p>
            <sub>Made with :heart: by people who loves code and JavaScript</sub>
        </p>
        <br>
    </div>
  </body>
</html>

## Installation

If you are using yarn
```sh
yarn add @albertoarana/decoder-parameters
```

or npm
```sh
npm install @albertoarana/decoder-parameters --save
```

## Use
### Without serialize

```js
import decoderParameters from '@albertoarana/decoder-parameters';

const params = '?name=Alberto&lastName=Arana';

decoderParameters(params);
// ouput: {name: 'Alberto', lastName: 'Arana'}
```

### With serialize

```js
import decoderParameters from '@albertoarana/decoder-parameters';

const serialize = {
  filterName: 'name',
  filterLastName: 'lastName'
};

const params = '?filterName=Alberto&FilterLastName=Arana';

decoderParameters(params, serialize);
// ouput: {name: 'Alberto', lastname: 'Arana'}
```
