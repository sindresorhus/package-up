import path from 'path';
import test from 'ava';
import fn from './';

const cwd = path.join(__dirname, 'fixture');
const pkgPath = path.join(__dirname, 'package.json');

test('async', t => {
	return fn(cwd).then(x => t.is(x, pkgPath));
});

test('sync', t => {
	t.is(fn.sync(cwd), pkgPath);
	t.end();
});
