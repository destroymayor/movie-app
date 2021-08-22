import { SEARCH_PEOPLE_API } from '@/api/api';

import useSearchResults from '@/hooks/queries/search/use-search-results.hook';
import useSearchResultsFilter from '@/hooks/queries/search/use-search-results-filter.hook';

import Layout from '@/components/Layout/Layout';
import SearchLayout from '@/components/Search/SearchLayout';
import PeopleSearchComponent from '@/components/Search/People/People';

export default function PeopleSearchPage() {
  const { data, status } = useSearchResults({ api: SEARCH_PEOPLE_API });
  useSearchResultsFilter();

  return (
    <SearchLayout>
      <PeopleSearchComponent data={data} status={status} />
    </SearchLayout>
  );
}

PeopleSearchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
