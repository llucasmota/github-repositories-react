import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.github.com`,
  /**
   * os problemas de CORS foram resolvidos desta forma:
   */
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
