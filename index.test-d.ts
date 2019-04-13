import {expectType} from 'tsd';
import pkgUp = require('.');

expectType<Promise<string | null>>(pkgUp());
expectType<Promise<string | null>>(pkgUp({cwd: '.'}));
expectType<string | null>(pkgUp.sync());
expectType<string | null>(pkgUp.sync({cwd: '.'}));
