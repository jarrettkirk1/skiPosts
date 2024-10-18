import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Update this if your API URL changes
});

export default axiosInstance;
