import { SEARCH_KEYWORDS_API } from '@/api/api';

import useSearchResults from '@/hooks/queries/search/use-search-results.hook';
import useSearchResultsFilter from '@/hooks/queries/search/use-search-results-filter.hook';

import Layout from '@/components/Layout/Layout';
import SearchLayout from '@/components/Search/SearchLayout';
import KeywordsSearchComponent from '@/components/Search/Keywords/Keywords';

export default function KeywordsSearchPage() {
  const { data, status } = useSearchResults({ api: SEARCH_KEYWORDS_API });
  useSearchResultsFilter();

  return (
    <SearchLayout>
      <KeywordsSearchComponent data={data} status={status} />
    </SearchLayout>
  );
}

KeywordsSearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
