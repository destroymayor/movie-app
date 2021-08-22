import { useRecoilState, useResetRecoilState } from 'recoil';
import { moviesSearchState, moviesDataState } from '@/store/movies/movies';

import { mode } from '@/constants/fields/fields';

const useSearchMovie = () => {
  const resetMoviesDataState = useResetRecoilState(moviesDataState);
  const [moviesSearch, setMoviesSearch] = useRecoilState(moviesSearchState);

  const setSearchMode = (searchMode) => {
    setMoviesSearch((prevState) => ({
      ...prevState,
      searchMode,
    }));
    resetMoviesDataState();
  };

  const setSearchValue = (searchValue) => {
    setMoviesSearch((prevState) => ({
      ...prevState,
      searchMode: mode.search,
      searchValue,
    }));
  };

  const setDiscoverMovies = ({ title, type, params }) => {
    setMoviesSearch((prevState) => ({
      ...prevState,
      searchMode: mode.discover,
      discover: {
        title,
        type,
        params,
      },
    }));
    resetMoviesDataState();
  };

  return {
    searchState: moviesSearch,
    setSearchMode,
    setSearchValue,
    setDiscoverMovies,
  };
};

export default useSearchMovie;
