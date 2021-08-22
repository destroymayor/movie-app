import HEAD from 'next/head';

import getMovie from '@/api/getMovie';
import { dataFields } from '@/constants/fields';

import useMovieDetails from '@/hooks/queries/use-movie-details.hook';

import Layout from '@/components/Layout/Layout';
import MovieDetail from '@/components/MovieDetail';

export default function MoviePage(props) {
  const { id, data } = props;

  const queryType = dataFields.movie.key;

  const { data: movieExternalIdsData } = useMovieDetails({
    queryType,
    queryParams: 'external_ids',
    id,
  });
  const { data: movieImagesData } = useMovieDetails({
    queryType,
    queryParams: 'images?language=en',
    id,
  });
  const { data: movieCreditsData } = useMovieDetails({
    queryType,
    queryParams: 'credits',
    id,
  });
  const { data: movieVideosData } = useMovieDetails({
    queryType,
    queryParams: 'videos',
    id,
  });
  const { data: movieReviewsData } = useMovieDetails({
    queryType,
    queryParams: 'reviews',
    id,
  });
  const { data: movieKeywordsData } = useMovieDetails({
    queryType,
    queryParams: 'keywords',
    id,
  });
  const { data: movieRecommendationsData } = useMovieDetails({
    queryType,
    queryParams: 'recommendations',
    id,
  });

  return (
    <>
      <HEAD>
        <title>{data?.original_title}</title>
      </HEAD>
      <MovieDetail
        data={data}
        externalIdsData={movieExternalIdsData}
        imagesData={movieImagesData}
        creditsData={movieCreditsData?.cast}
        videosData={movieVideosData?.results}
        reviewsData={movieReviewsData?.results}
        keywordsData={movieKeywordsData?.keywords}
        recommendationsData={movieRecommendationsData?.results}
        type={dataFields.movie.key}
      />
    </>
  );
}

MoviePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const data = await getMovie(id);

  return {
    props: { id, data },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
