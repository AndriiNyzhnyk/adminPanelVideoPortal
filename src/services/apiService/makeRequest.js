import axios from 'axios';
import errorService from '../errorService';
import { apiUrl } from '../../config';

export default async (config) => {
  const { method = 'get', headers = {}, params, body } = config;

  const token = localStorage.getItem('accessToken');
  headers.Authorization = `Bearer ${token}`;

  const url = config.url.startsWith('http') ? config.url : apiUrl + config.url;
  const options = { headers, params };
  try {
    const response = method === 'get'
      ? await axios[method](url, options)
      : await axios[method](url, body, options);
    return config.fullResponse ? response : response.data;
  } catch (err) {
    return errorService(err, `${method} request error`);
  }
};
