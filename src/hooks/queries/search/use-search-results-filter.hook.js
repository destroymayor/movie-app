import { useEffect } from 'react';

import {
  SEARCH_MOVIE_API,
  SEARCH_PEOPLE_API,
  SEARCH_TV_API,
  SEARCH_COMPANIES_API,
  SEARCH_COLLECTIONS_API,
  SEARCH_KEYWORDS_API,
} from '@/api/api';

import useSWR from 'swr';
import useDebounce from '@/hooks/utils/use-debounce.hook';

import { useRecoilValue, useRecoilState } from 'recoil';
import { moviesFilterState } from '@/context/movies/filter';
import { searchResultsFilterState } from 'src/context/movies/search';

import routes from '@/constants/routes';

const useSearchResultsFilter = () => {
  const moviesFilter = useRecoilValue(moviesFilterState);
  const searchValue = moviesFilter.searchValue;
  const [searchResultsFilter, setSearchResultsFilter] = useRecoilState(searchResultsFilterState);

  const debounceSearch = useDebounce(searchValue, 1000);
  const getDeBounceUrl = (url) => (debounceSearch ? `${url}?query=${debounceSearch}` : null);

  const { data: moviesSearchData } = useSWR(getDeBounceUrl(SEARCH_MOVIE_API));
  const { data: peopleSearchData } = useSWR(getDeBounceUrl(SEARCH_PEOPLE_API));
  const { data: tvSearchData } = useSWR(getDeBounceUrl(SEARCH_TV_API));
  const { data: companiesSearchData } = useSWR(getDeBounceUrl(SEARCH_COMPANIES_API));
  const { data: collectionsSearchData } = useSWR(getDeBounceUrl(SEARCH_COLLECTIONS_API));
  const { data: keywordsSearchData } = useSWR(getDeBounceUrl(SEARCH_KEYWORDS_API));

  const isLoading =
    !moviesSearchData ||
    !peopleSearchData ||
    !tvSearchData ||
    !companiesSearchData ||
    !collectionsSearchData ||
    !keywordsSearchData;

  // process status
  useEffect(() => {
    setSearchResultsFilter((prevState) => ({
      ...prevState,
      isLoading,
    }));
  }, [moviesSearchData, setSearchResultsFilter, isLoading]);

  useEffect(() => {
    const searchResultsData = [
      {
        label: 'Movies',
        route: routes.search.index,
        totalResults: moviesSearchData?.total_results,
      },
      {
        label: 'People',
        route: routes.search.people,
        totalResults: peopleSearchData?.total_results,
      },
      {
        label: 'TV Shows',
        route: routes.search.tv,
        totalResults: tvSearchData?.total_results,
      },
      {
        label: 'Companies',
        route: routes.search.companies,
        totalResults: companiesSearchData?.total_results,
      },
      {
        label: 'Collections',
        route: routes.search.collections,
        totalResults: collectionsSearchData?.total_results,
      },
      {
        label: 'Keywords',
        route: routes.search.keywords,
        totalResults: keywordsSearchData?.total_results,
      },
    ];

    setSearchResultsFilter((prevState) => ({
      ...prevState,
      data: searchResultsData,
    }));
  }, [
    setSearchResultsFilter,
    moviesSearchData?.total_results,
    peopleSearchData?.total_results,
    tvSearchData?.total_results,
    companiesSearchData?.total_results,
    collectionsSearchData?.total_results,
    keywordsSearchData?.total_results,
  ]);

  return { isLoading, data: searchResultsFilter };
};

export default useSearchResultsFilter;
