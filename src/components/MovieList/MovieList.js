import { useRecoilValue } from 'recoil';
import { moviesDataState, moviesSearchState } from '@/store/movies/movies';

import LoadMore from '@/components/MovieList/LoadMore';
import CardSkeleton from '@/components/MovieCard/CardSkeleton';
import MovieCard from '@/components/MovieCard/MovieCard';

const MovieList = () => {
  const moviesSearch = useRecoilValue(moviesSearchState);
  const moviesData = useRecoilValue(moviesDataState);
  const { isLoading, data } = moviesData;

  if (isLoading) return <CardSkeleton />;

  return (
    <div className="h-screen flex flex-col items-center dark:bg-gray-600">
      <ul className="flex flex-wrap justify-center bg-white dark:bg-gray-600">
        {data?.map((item, index) => (
          <MovieCard
            key={item?.title + index.toString()}
            type={moviesSearch.discover.type}
            data={item}
          />
        ))}
      </ul>
      <LoadMore />
    </div>
  );
};

export default MovieList;
