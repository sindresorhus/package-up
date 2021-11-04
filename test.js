import path from 'node:path';
import test from 'ava';
import {fileURLToPath} from 'node:url';
import {pkgUp, pkgUpSync} from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cwd = path.join(__dirname, 'fixture');
const pkgPath = path.join(__dirname, 'package.json');

test('async', async t => {
	t.is(await pkgUp({cwd}), pkgPath);
	t.is(path.dirname(await pkgUp()), __dirname);
});

test('sync', t => {
	t.is(pkgUpSync({cwd}), pkgPath);
	t.is(path.dirname(pkgUpSync()), __dirname);
});
