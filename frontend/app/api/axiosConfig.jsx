// src/api/axiosConfig.js

import axios from 'axios';

let accessToken = null;
let refreshToken = null;

const axiosInstance = axios.create({
  baseURL: process.env.DJANGO_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post('https://your-api-base-url.com/auth/refresh', { refreshToken });
        accessToken = response.data.accessToken;

        // Retry the original request with the new token
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure (e.g., logout user)
        accessToken = null;
        refreshToken = null;
        // Redirect to login or dispatch a logout action
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const setTokens = (newAccessToken, newRefreshToken) => {
  accessToken = newAccessToken;
  refreshToken = newRefreshToken;
};

export const clearTokens = () => {
  accessToken = null;
  refreshToken = null;
};

export default axiosInstance;