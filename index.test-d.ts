import {expectType} from 'tsd';
import {packageUp, packageUpSync} from './index.js';

expectType<Promise<string | undefined>>(packageUp());
expectType<Promise<string | undefined>>(packageUp({cwd: '.'}));
expectType<string | undefined>(packageUpSync());
expectType<string | undefined>(packageUpSync({cwd: '.'}));
