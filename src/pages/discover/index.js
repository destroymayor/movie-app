import useMovies from '@/hooks/useMovies';

import Layout from '@/components/Layout/Layout';
import MovieList from '@/components/MovieList/MovieList';

export default function DiscoverPage() {
  useMovies();

  return <MovieList />;
}

DiscoverPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
