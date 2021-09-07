import HEAD from 'next/head';

import getMovie from '@/api/getMovie';
import { discover_type } from '@/constants/fields/fields';

import useMovieDetails from '@/hooks/useMovieDetails';

import Layout from '@/components/Layout/Layout';
import MovieDetail from '@/components/MovieDetail/Movie';

export default function MoviePage(props) {
  const { id, movieData } = props;

  const { data: movieReviewsData } = useMovieDetails({ queryParams: 'reviews', id });
  const { data: movieKeywordsData } = useMovieDetails({ queryParams: 'keywords', id });
  const { data: movieRecommendedData } = useMovieDetails({
    queryParams: 'recommendations',
    id,
  });

  return (
    <>
      <HEAD>
        <title>{movieData?.original_title}</title>
      </HEAD>
      <MovieDetail
        data={movieData}
        reviewsData={movieReviewsData?.results}
        keywordsData={movieKeywordsData?.keywords}
        recommendedData={movieRecommendedData?.results}
        type={discover_type.fields.movie.key}
      />
    </>
  );
}

MoviePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const movieData = await getMovie(id);

  return {
    props: { id, movieData },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
