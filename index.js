import process from 'node:process';
import {findUp, findUpSync} from 'find-up-simple';

export async function packageUp({cwd = process.cwd()} = {}) {
	return findUp('package.json', {cwd});
}

export function packageUpSync({cwd = process.cwd()} = {}) {
	return findUpSync('package.json', {cwd});
}
