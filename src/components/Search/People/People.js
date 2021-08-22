import List from '@/components/Search/People/List';
import LoadMore from '@/components/Common/LoadMore';

export const PeopleSearch = (props) => {
  const { data = [], status } = props;

  return (
    <>
      <List data={data} />
      <LoadMore
        isError={status.isError}
        isLoadingMore={status.isLoadingMore}
        isReachingEnd={status.isReachingEnd}
      />
    </>
  );
};

export default PeopleSearch;
