import { Repo } from '@/model/Repo';
import { defineStore } from 'pinia';
import { getUserRepos } from '@/api/user';
interface UserReposState {
	reposInfo: Repo[] | null;
}

export const userReposStore = defineStore('userReposStore', {
	state: (): UserReposState => ({
		reposInfo: [] as Repo[],
	}),
	getters: {
		getInfo: (state) => {
			return state.reposInfo;
		},
	},
	actions: {
		setReposInfo(repos: Repo[] | null) {
			this.reposInfo = repos;
		},
		fetchReposInfo(username: string) {
			if (username) {
				const request = getUserRepos(username);
				request
					.then((res) => {
						console.log(res);
						if (res.status == 200) {
							this.setReposInfo(res.data);
						}
					})
					.catch((err) => {
						console.error('Error to request repos!', err);
					});
			} else {
				this.reposInfo = null;
			}
		},
	},
});
