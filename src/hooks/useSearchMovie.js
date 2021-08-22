import { useRecoilState } from 'recoil';
import { moviesDataState } from '@/store/movies';

import { SEARCH_MOVIE_API, POPULAR_MOVIE_API } from '@/api/api';

const useSearchMovie = () => {
  const [moviesData, setMoviesData] = useRecoilState(moviesDataState);

  const handleSearch = (keyword) => {
    const searchUrl = `${SEARCH_MOVIE_API}?query=${keyword}`;
    const popularUrl = `${POPULAR_MOVIE_API}?sort_by=popularity.desc`;

    setMoviesData((prevState) => ({ ...prevState, search: keyword }));

    if (keyword.length === 0) {
      setMoviesData((prevState) => ({ ...prevState, queryUrl: popularUrl }));
      return;
    }

    setMoviesData((prevState) => ({ ...prevState, queryUrl: searchUrl }));
  };

  return { handleSearch, searchValue: moviesData.search };
};

export default useSearchMovie;
