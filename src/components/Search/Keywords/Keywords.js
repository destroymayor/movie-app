import router from 'next/router';
import useMoviesFilter from '@/hooks/filters/use-movies-filter.hook';

import routes from '@/constants/routes';

import ListSecondary from '@/components/Search/Common/ListSecondary';
import LoadMore from '@/components/Common/LoadMore';

export const KeywordsSearch = (props) => {
  const { data = [], status } = props;
  const { setSearchValue } = useMoviesFilter();

  const handleKeywordSearch = (value) => {
    setSearchValue(value?.name);
    router.push(routes.search.index);
  };

  return (
    <>
      <ListSecondary
        loading={status.isLoading}
        data={data}
        onClick={(value) => handleKeywordSearch(value)}
      />
      <LoadMore
        isError={status.isError}
        isLoadingMore={status.isLoadingMore}
        isReachingEnd={status.isReachingEnd}
      />
    </>
  );
};

export default KeywordsSearch;
