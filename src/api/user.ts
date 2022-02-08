import request from '@/plugins/axios';

const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;

const HEADERS = {
	accept: 'application/vnd.github.v3+json'
}

const DEFAULT_PARAMS ={
	per_page: 100
}

export function getUserInfo(username: string): Promise<any> {
	return request({
		url: `${BASE_URL}/users/${username}`,
		headers: {
			...HEADERS
		},
		method: 'get',
	});
}

export function getUserRepos(username: string): Promise<any> {
	return request({
		url: `${BASE_URL}/users/${username}/repos`,
		headers: {
			...HEADERS
		},
		params: {
			...DEFAULT_PARAMS
		},
		method: 'get',
	});
}
