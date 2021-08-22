import { SEARCH_COMPANIES_API } from '@/api/api';

import useSearchResults from '@/hooks/queries/search/use-search-results.hook';
import useSearchResultsFilter from '@/hooks/queries/search/use-search-results-filter.hook';

import Layout from '@/components/Layout/Layout';
import SearchLayout from '@/components/Search/SearchLayout';
import CompaniesSearchComponent from '@/components/Search/Companies/Companies';

export default function CompaniesSearchPage() {
  const { data, status } = useSearchResults({ api: SEARCH_COMPANIES_API });
  useSearchResultsFilter();

  return (
    <SearchLayout>
      <CompaniesSearchComponent data={data} status={status} />
    </SearchLayout>
  );
}

CompaniesSearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
