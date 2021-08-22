import { SEARCH_COLLECTIONS_API } from '@/api/api';

import useSearchResults from '@/hooks/queries/search/use-search-results.hook';
import useSearchResultsFilter from '@/hooks/queries/search/use-search-results-filter.hook';

import Layout from '@/components/Layout/Layout';
import SearchLayout from '@/components/Search/SearchLayout';
import CollectionsSearchComponent from '@/components/Search/Collections/Collections';

export default function CollectionsSearchPage() {
  const { data, status } = useSearchResults({ api: SEARCH_COLLECTIONS_API });
  useSearchResultsFilter();

  return (
    <SearchLayout>
      <CollectionsSearchComponent data={data} status={status} />
    </SearchLayout>
  );
}

CollectionsSearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
