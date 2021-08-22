import axios from 'axios';

import { TMDB_URL } from '@/api/api';
import { TMDB_API_TOKEN } from '@/config/tmdb';

const axiosConfig = axios.create({
  baseURL: TMDB_URL,
  headers: {
    Authorization: `Bearer ${TMDB_API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export const fetcher = (url) => axiosConfig.get(url).then((res) => res.data);
