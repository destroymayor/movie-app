import { dataFields } from '@/constants/fields';

import ListPrimary from '@/components/Search/Common/ListPrimary';
import LoadMore from '@/components/Common/LoadMore';

export const MovieSearch = (props) => {
  const { data = [], status } = props;

  return (
    <>
      <ListPrimary type={dataFields.movie.key} loading={status.isLoading} data={data} />
      <LoadMore
        isError={status.isError}
        isLoadingMore={status.isLoadingMore}
        isReachingEnd={status.isReachingEnd}
      />
    </>
  );
};

export default MovieSearch;
