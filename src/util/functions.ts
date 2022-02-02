import { Repo } from '@/model/Repo';

/**
 * A function to count languages in array of Repos
 * @param dataArray array of Repos
 * @returns object with languages and their counts
 */
export function reduceCountLanguage(dataArray: Repo[]): Object {
	return dataArray.reduce(function (obj: any, v: Repo) {
		obj[v.language] = (obj[v.language] || 0) + 1;
		return obj;
	}, {});
}

