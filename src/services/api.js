import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.25.150:8000',
});

export default api;
