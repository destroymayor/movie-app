import { SEARCH_MOVIE_API } from '@/api/api';

import useSearchResults from '@/hooks/queries/search/use-search-results.hook';
import useSearchResultsFilter from '@/hooks/queries/search/use-search-results-filter.hook';

import Layout from '@/components/Layout/Layout';
import SearchLayout from '@/components/Search/SearchLayout';
import MovieSearch from '@/components/Search/Movie/Movie';

export default function MovieSearchPage() {
  const { data, status } = useSearchResults({ api: SEARCH_MOVIE_API });
  useSearchResultsFilter();

  return (
    <SearchLayout>
      <MovieSearch data={data} status={status} />
    </SearchLayout>
  );
}

MovieSearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
