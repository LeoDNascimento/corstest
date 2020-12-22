import axios from 'axios';

const api = axios.create({
  baseURL: 'https://beekeep-backend.herokuapp.com/',
});

export default api;
