import { atom } from 'recoil';
import { dataFields } from '@/constants/fields';

export const moviesFilterState = atom({
  key: 'moviesFilterState',
  default: {
    isLoading: false,
    isError: false,
    searchValue: '',
    filter: {
      title: undefined,
      path: undefined,
      type: dataFields.movie.key,
      params: undefined,
    },
  },
});
