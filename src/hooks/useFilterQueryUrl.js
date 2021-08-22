import { discover_type } from '@/constants/fields/fields';
import { SEARCH_MOVIE_API, DISCOVER_MOVIE_API, DISCOVER_TV_API } from '@/api/api';

import { useRecoilValue } from 'recoil';
import { moviesSearchState } from '@/store/movies/movies';

const useFilterQueryUrl = () => {
  const moviesSearch = useRecoilValue(moviesSearchState);
  const { searchMode, searchValue, discover } = moviesSearch;

  const discoverTypes = {
    [discover_type.fields.movie.key]: DISCOVER_MOVIE_API,
    [discover_type.fields.tv.key]: DISCOVER_TV_API,
  };

  const urlTypes = {
    search: `${SEARCH_MOVIE_API}?query=${searchValue}`,
    discover: `${discoverTypes?.[discover?.type]}?${discover?.params}`,
  };

  const url = urlTypes?.[searchMode];

  return { url };
};

export default useFilterQueryUrl;
