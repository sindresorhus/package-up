import path from 'path';
import test from 'ava';
import m from '.';

const cwd = path.join(__dirname, 'fixture');
const pkgPath = path.join(__dirname, 'package.json');

test('async', async t => {
	t.is(await m(cwd), pkgPath);
});

test('sync', t => {
	t.is(m.sync(cwd), pkgPath);
});
