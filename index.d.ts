export type Options = {
	/**
	The directory to start from.

	@default process.cwd()
	*/
	readonly cwd?: string;
};

/**
Find the closest `package.json` file.

@returns The file path, or `undefined` if it could not be found.

@example
```
// /
// └── Users
//     └── sindresorhus
//         └── foo
//             ├── package.json
//             └── bar
//                 ├── baz
//                 └── example.js

// example.js
import {packageUp} from 'package-up';

console.log(await packageUp());
//=> '/Users/sindresorhus/foo/package.json'
```
*/
export function packageUp(options?: Options): Promise<string | undefined>;

/**
Synchronously find the closest `package.json` file.

@returns The file path, or `undefined` if it could not be found.

@example
```
// /
// └── Users
//     └── sindresorhus
//         └── foo
//             ├── package.json
//             └── bar
//                 ├── baz
//                 └── example.js

// example.js
import {packageUpSync} from 'package-up';

console.log(packageUpSync());
//=> '/Users/sindresorhus/foo/package.json'
```
*/
export function packageUpSync(options?: Options): string | undefined;

