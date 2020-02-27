import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fitologiabackend.azurewebsites.net'
});

export default axiosInstance;