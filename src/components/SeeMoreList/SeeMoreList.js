import LoadMore from '@/components/Common/LoadMore';
import CardSkeleton from '@/components/MovieCard/CardSkeleton';
import MovieCard from '@/components/MovieCard/MovieCard';

const SeeMoreList = (props) => {
  const { data = [], type, isError, isLoading, isLoadingMore, isReachingEnd } = props;

  if (isLoading) return <CardSkeleton />;

  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-wrap justify-center bg-white dark:bg-gray-600">
        {data?.map((item, index) => (
          <MovieCard key={item?.title + index.toString()} type={type} data={item} />
        ))}
      </ul>
      <LoadMore isError={isError} isLoadingMore={isLoadingMore} isReachingEnd={isReachingEnd} />
    </div>
  );
};

export default SeeMoreList;
