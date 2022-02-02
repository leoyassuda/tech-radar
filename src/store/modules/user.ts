import { defineStore } from 'pinia';
import { getUserInfo } from '@/api/user';
import { User } from '@/model/User';

interface UserState {
	userInfo: User | null;
}

export const userStore = defineStore('userStore', {
	state: (): UserState => ({
		userInfo: {} as User,
	}),
	getters: {
		getInfo: (state) => {
			return state.userInfo;
		},
	},
	actions: {
		setInfo(info: User | null) {
			this.userInfo = info;
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
			} else {
				this.userInfo = null;
			}
		},
	},
});
