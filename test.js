import path from 'path';
import test from 'ava';
import fn from './';

const cwd = path.join(__dirname, 'fixture');
const pkgPath = path.join(__dirname, 'package.json');

test('async', async t => {
	t.is(await fn(cwd), pkgPath);
});

test('sync', t => {
	t.is(fn.sync(cwd), pkgPath);
	t.end();
});
