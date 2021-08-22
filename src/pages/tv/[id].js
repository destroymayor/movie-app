import HEAD from 'next/head';

import getTV from '@/api/getTV';
import { dataFields } from '@/constants/fields';

import useMovieDetails from '@/hooks/queries/use-movie-details.hook';

import Layout from '@/components/Layout/Layout';
import MovieDetail from '@/components/MovieDetail';

export default function TVShowsPage(props) {
  const { id, data } = props;

  const queryType = dataFields.tv.key;

  const { data: tvExternalIdsData } = useMovieDetails({
    queryType,
    queryParams: 'external_ids',
    id,
  });
  const { data: tvImagesData } = useMovieDetails({
    queryType,
    queryParams: 'images?language=en',
    id,
  });
  const { data: tvCreditsData } = useMovieDetails({
    queryType,
    queryParams: 'credits',
    id,
  });
  const { data: tvVideosData } = useMovieDetails({
    queryType,
    queryParams: 'videos',
    id,
  });
  const { data: tvReviewsData } = useMovieDetails({
    queryType,
    queryParams: 'reviews',
    id,
  });
  const { data: tvKeywordsData } = useMovieDetails({
    queryType,
    queryParams: 'keywords',
    id,
  });
  const { data: tvRecommendationsData } = useMovieDetails({
    queryType,
    queryParams: 'recommendations',
    id,
  });

  return (
    <>
      <HEAD>
        <title>{data?.original_name}</title>
      </HEAD>
      <MovieDetail
        data={data}
        externalIdsData={tvExternalIdsData}
        imagesData={tvImagesData}
        creditsData={tvCreditsData?.cast}
        videosData={tvVideosData?.results}
        reviewsData={tvReviewsData?.results}
        keywordsData={tvKeywordsData?.results}
        recommendationsData={tvRecommendationsData?.results}
        type={dataFields.tv.key}
      ></MovieDetail>
    </>
  );
}

TVShowsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const data = await getTV(id);

  return {
    props: { id, data },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
