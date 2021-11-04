import {findUp, findUpSync} from 'find-up';

export async function pkgUp({cwd} = {}) {
	return findUp('package.json', {cwd});
}

export function pkgUpSync({cwd} = {}) {
	return findUpSync('package.json', {cwd});
}
