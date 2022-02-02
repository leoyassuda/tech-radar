import request from '@/plugins/axios';

const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;

export function getUserInfo(username: string): Promise<any> {
	return request({
		url: `${BASE_URL}/users/${username}`,
		method: 'get',
	});
}

export function getUserRepos(username: string): Promise<any> {
	return request({
		url: `${BASE_URL}/users/${username}/repos`,
		method: 'get',
	});
}
