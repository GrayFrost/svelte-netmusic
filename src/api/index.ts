import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.response.use(function(response) {
  const { data } = response;
  return data;
}, function(error) {
  return Promise.reject(error)
})

export default instance;