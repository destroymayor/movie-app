import { SEARCH_TV_API } from '@/api/api';

import useSearchResults from '@/hooks/queries/search/use-search-results.hook';
import useSearchResultsFilter from '@/hooks/queries/search/use-search-results-filter.hook';

import Layout from '@/components/Layout/Layout';
import SearchLayout from '@/components/Search/SearchLayout';
import TVSearch from '@/components/Search/TV/TV';

export default function TVSearchPage() {
  const { data, status } = useSearchResults({ api: SEARCH_TV_API });
  useSearchResultsFilter();

  return (
    <SearchLayout>
      <TVSearch data={data} status={status} />
    </SearchLayout>
  );
}

TVSearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
