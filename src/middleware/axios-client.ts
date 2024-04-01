import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`,
  withCredentials: true
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.method !== 'get') {
      config.headers['csrf-token'] = localStorage.getItem('csrf-token');
    }
    return config;
  },
  (error) => {
    throw error;
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.config.method !== 'get') {
      localStorage.setItem('csrf-token', response.data?.csrfToken);
    }
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN');
    }
    throw error;
  }
);
