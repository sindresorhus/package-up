# package-up

> Find the closest package.json file

## Install

```sh
npm install package-up
```

## Usage

```
/
└── Users
    └── sindresorhus
        └── foo
            ├── package.json
            └── bar
                ├── baz
                └── example.js
```

```js
// example.js
import {packageUp} from 'package-up';

console.log(await packageUp());
//=> '/Users/sindresorhus/foo/package.json'
```

## API

### packageUp(options?)

Returns a `Promise<string>` for the file path, or `Promise<undefined>` if it could not be found.

### packageUpSync(options?)

Returns the file path, or `undefined` if it could not be found.

#### options

Type: `object`

#### cwd

Type: `string`\
Default: `process.cwd()`

The directory to start from.

## Related

- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file
- [pkg-dir](https://github.com/sindresorhus/pkg-dir) - Find the root directory of an npm package
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories
