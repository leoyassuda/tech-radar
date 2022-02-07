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

/**
 * @description
 * Takes an Array<V>, and a grouping function,
 * and returns a Map of the array grouped by the grouping function.
 *
 * @param list An array of type V.
 * @param keyGetter A Function that takes the the Array type V as an input, and returns a value of type K.
 *                  K is generally intended to be a property key of V.
 *
 * @returns Map of the array grouped by the grouping function.
 */
export function groupBy<K, V>(
	list: Array<V>,
	keyGetter: (input: V) => K
): Map<K, Array<V>> {
	const map = new Map<K, Array<V>>();
	list.forEach((item) => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
}
