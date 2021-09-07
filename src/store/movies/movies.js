import { atom } from 'recoil';

import { mode, discover_type } from '@/constants/fields/fields';

export const moviesDataState = atom({
  key: 'moviesDataState',
  default: {
    isLoading: true,
    isLoadingMore: true,
    isReachingEnd: true,
    isError: false,
    data: [],
  },
});

export const moviesSearchState = atom({
  key: 'moviesSearchState',
  default: {
    isLoading: false,
    isError: false,
    searchValue: '',
    searchMode: mode.discover,
    discover: {
      title: discover_type.fields.movie.label,
      type: discover_type.fields.movie.key,
      params: '',
    },
  },
});
