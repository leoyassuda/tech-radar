import { User } from '../model/User';
import request from '../plugins/axios';

const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;

export function getUserInfo() {
  return request({
    url: `${BASE_URL}/users/leoyassuda`,
    method: 'get',
    // params,
  });
}

export function getUserRepos(params: unknown) {
  return request({
    url: `${BASE_URL}/users/leoyassuda/repos`,
    method: 'get',
    params,
  });
}
