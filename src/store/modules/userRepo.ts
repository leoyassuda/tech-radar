import { Repos } from '@/model/Repos';
import { defineStore } from 'pinia';
import { getUserInfo } from '../../api/user';
import { User } from '../../model/User';

interface UserReposState {
	info: Repos | null;
}

export const userReposStore = defineStore('userReposStore', {
	state: (): UserReposState => ({
		info: null,
	}),
	getters: {
		getInfo: (state) => {
			return state.info;
		},
	},
	actions: {
		setInfo(info: User | null) {
			this.info = info;
		},
		fetchInfo(username: string) {
			if (username) {
				const request = getUserInfo(username);
				request
					.then((res) => {
						console.log(res);
						if (res.status == 200) {
							this.setInfo(res.data);
						}
					})
					.catch((err) => {
						console.error('Error to request user info!', err);
					});
			}else{
				this.info = null;
			}
		},
	},
});
