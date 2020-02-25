import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fitologia-production.netlify.com/.netlify/functions/index'
});

export default axiosInstance;