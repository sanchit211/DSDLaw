import axios from 'axios';
import {baseURL} from './config';
import {getData} from './local-storage';
import {store_key_userToken} from './constants';

const API = axios.create({
  baseURL: baseURL,
});

API.interceptors.request.use(
  async config => {
    const token = await getData(store_key_userToken);
    // console.log('Axios API ---->', token);
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
      //console.log(config.headers.Authorization)
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default API;
