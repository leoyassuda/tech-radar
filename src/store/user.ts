import { defineStore } from 'pinia';
import { getUserInfo } from '../api/user';

export const userStore = defineStore('main', {
  state: () => ({
    user: {
      id: 0,
      login: '',
      name: '',
      avatar: '',
      repos: '',
      blog: '',
      location: '',
      twitter: '',
    },
  }),
  getters: {
    name: (state) => {
      state.user.name;
    },
  },
  actions: {
    loadInfo() {
      let request = getUserInfo();
      request
        .then((res) => {
          console.log(res);
          this.user = res;
        })
        .catch((err) => {
          console.error('Error to request user info!', err);
        });
    },
  },
});
