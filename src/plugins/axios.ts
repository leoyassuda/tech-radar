import axios, { AxiosResponse } from 'axios';
import qs from 'qs';

const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
  transformRequest: [
    function (data) {
      return qs.stringify(data);
    },
  ],
});

// request.interceptors.request.use(
//   (config) => {
//     if (config.method?.toLowerCase() === "post") {
//         _sign(config.data);
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('err' + error);
    return Promise.reject(error);
  }
);

export interface PromiseBase {
  data: string | Array<any> | number | Object | undefined | null;
  error_code: number;
  message?: string;
}

export type ResponseBase = AxiosResponse<PromiseBase>;

export default request;
