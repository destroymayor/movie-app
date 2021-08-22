import useMoreMovies from '@/hooks/queries/use-more-movies.hook';

import Layout from '@/components/Layout/Layout';
import SeeMoreList from '@/components/SeeMoreList/SeeMoreList';

export default function MoviesPage() {
  const { data, status, type } = useMoreMovies();

  return (
    <main>
      <SeeMoreList
        data={data}
        type={type}
        isError={status.isError}
        isLoading={status.isLoading}
        isLoadingMore={status.isLoadingMore}
        isReachingEnd={status.isReachingEnd}
      />
    </main>
  );
}

MoviesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
