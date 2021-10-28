import getConfig from 'next/config';
import axios from 'axios';

import { TMDB_URL } from '@/api/api';

const TMDB_API_TOKEN = getConfig()?.publicRuntimeConfig?.TMDB_API_TOKEN;

const axiosConfig = axios.create({
  baseURL: TMDB_URL,
  headers: {
    Authorization: `Bearer ${TMDB_API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export const fetcher = (url) => axiosConfig.get(url).then((res) => res.data);
