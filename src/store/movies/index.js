import { atom } from 'recoil';

import { POPULAR_MOVIE_API } from '@/api/api';

export const moviesDataState = atom({
  key: 'moviesDataState',
  default: {
    isLoading: false,
    isError: false,
    search: '',
    queryUrl: `${POPULAR_MOVIE_API}?sort_by=popularity.desc`,
    page: 1,
    total_pages: 1,
    total_results: 1,
    data: [],
  },
});
