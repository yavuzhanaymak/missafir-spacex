import axios from 'axios';
 

import {API_URL} from "@env"

 

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = API_URL ;
 
axios.interceptors.request.use(
  async (config) => {

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
 
)
 

export default axios;
