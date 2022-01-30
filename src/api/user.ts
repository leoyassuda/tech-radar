import request from '../plugins/axios';

const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;

export function getUserInfo(username: string) {
	return request({
		url: `${BASE_URL}/users/${username}`,
		method: 'get',
		// params,
	});
}

export function getUserRepos(username: string) {
	return request({
		url: `${BASE_URL}/users/${username}/repos`,
		method: 'get',
	});
}
