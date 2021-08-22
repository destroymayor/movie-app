import { atom } from 'recoil';

export const searchResultsFilterState = atom({
  key: 'searchResultsFilterState',
  default: {
    isLoading: false,
    isError: false,
    data: [],
  },
});
