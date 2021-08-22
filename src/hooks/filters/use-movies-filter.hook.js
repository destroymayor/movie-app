import { useRecoilState } from 'recoil';
import { moviesFilterState } from '@/context/movies/filter';

const useMoviesFilter = () => {
  const [moviesFilter, setMoviesFilter] = useRecoilState(moviesFilterState);

  const setSearchMode = (type) => {
    setMoviesFilter((prevState) => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        type,
      },
    }));
  };

  const setSearchValue = (searchValue) => {
    setMoviesFilter((prevState) => ({
      ...prevState,
      searchValue,
    }));
  };

  const setSeeMoreMovies = ({ title, type, path, params }) => {
    setMoviesFilter((prevState) => ({
      ...prevState,
      filter: {
        title,
        type,
        path,
        params,
      },
    }));
  };

  return {
    searchState: moviesFilter,
    setSearchMode,
    setSearchValue,
    setSeeMoreMovies,
  };
};

export default useMoviesFilter;
