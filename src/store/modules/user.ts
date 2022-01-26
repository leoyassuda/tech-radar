import { defineStore } from 'pinia';
import { getUserInfo } from '../../api/user';
import { User } from '../../model/User';

interface UserState {
	info: User | null;
}

export const userStore = defineStore('userStore', {
	state: (): UserState => ({
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
		fetchInfo() {
			const request = getUserInfo();
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
		},
	},
});
