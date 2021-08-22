import { useRecoilValue } from 'recoil';
import { moviesDataState, moviesSearchState } from '@/store/movies/movies';

import CardSkeleton from '@/components/MovieCard/CardSkeleton';
import MovieCard from '@/components/MovieCard/MovieCard';

const MovieList = () => {
  const moviesSearch = useRecoilValue(moviesSearchState);
  const moviesData = useRecoilValue(moviesDataState);
  const { isLoading, data } = moviesData;

  if (isLoading) return <CardSkeleton />;

  return (
    <ul className="flex flex-wrap justify-center">
      {data?.map((item, index) => (
        <MovieCard
          key={item?.title + index.toString()}
          type={moviesSearch.discover.type}
          data={item}
        />
      ))}
    </ul>
  );
};

export default MovieList;
