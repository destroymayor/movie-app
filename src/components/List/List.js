import { useRecoilValue } from 'recoil';
import { moviesDataState } from '@/store/movies';

import ListItem from '@/components/List/ListItem';

const List = () => {
  const moviesData = useRecoilValue(moviesDataState);
  const { isLoading, isError, data } = moviesData;

  if (isError || data.length === 0) return <div>No data</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <ul className="flex flex-wrap justify-center">
      {data?.map((item, index) => (
        <ListItem key={item?.title + index.toString()} item={item} />
      ))}
    </ul>
  );
};

export default List;
