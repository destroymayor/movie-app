import useMovies from '@/hooks/useMovies';

import Layout from '@/components/Layout/Layout';
import Discover from '@/components/Discover/Discover';

export default function DiscoverPage() {
  useMovies();

  return <Discover />;
}

DiscoverPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
