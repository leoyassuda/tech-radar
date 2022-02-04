import { Repo } from '@/model/Repo';

/**
 * A function to count languages in array of Repos
 * @param dataArray array of Repos
 * @returns object with languages and their counts
 */
export function reduceCountLanguage(dataArray: Repo[]): Object {
	console.log('reduce', dataArray);
	return dataArray.reduce(function (obj: any, v: Repo) {
		obj[v.language] = (obj[v.language] || 0) + 1;
		return obj;
	}, {});
}

/**
 * Get all entries keys from object
 * @param data array of Objects
 * @returns array of strings with entry keys
 */
export function getKeys(data: Object): Array<string> {
	if (data) return Object.keys(data);
	return [];
}

/**
 * Get all values from object
 * @param data array of Objects
 * @returns array of values
 */
export function getValues(data: Object): Array<string> {
	if (data) return Object.values(data);
	return [];
}
