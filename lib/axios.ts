import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'User-Agent': '*',
    Accept: 'application/json; charset=UTF-8',
  },
});

export const axiosWpInstance: AxiosInstance = axios.create({
  baseURL: process.env.WP_BASE_URL,
});
