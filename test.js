import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import {packageUp, packageUpSync} from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cwd = path.join(__dirname, 'fixture');
const packagePath = path.join(__dirname, 'package.json');

test('async', async t => {
	t.is(await packageUp({cwd}), packagePath);
	t.is(path.dirname(await packageUp()), __dirname);
});

test('sync', t => {
	t.is(packageUpSync({cwd}), packagePath);
	t.is(path.dirname(packageUpSync()), __dirname);
});
