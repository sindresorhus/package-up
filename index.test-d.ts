import {expectType} from 'tsd';
import {pkgUp, pkgUpSync} from './index.js';

expectType<Promise<string | undefined>>(pkgUp());
expectType<Promise<string | undefined>>(pkgUp({cwd: '.'}));
expectType<string | undefined>(pkgUpSync());
expectType<string | undefined>(pkgUpSync({cwd: '.'}));
