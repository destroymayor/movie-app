import MovieList from '@/components/MovieList/MovieList';
import LoadMore from '@/components/LoadMore/LoadMore';

const Discover = () => {
  return (
    <div className="flex flex-col items-center">
      <MovieList />
      <LoadMore />
    </div>
  );
};

export default Discover;
