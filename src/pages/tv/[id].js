import HEAD from 'next/head';

import getTV from '@/api/getTV';
import { discover_type } from '@/constants/fields/fields';

import useTVDetails from '@/hooks/useTVDetails';

import Layout from '@/components/Layout/Layout';
import MovieDetail from '@/components/MovieDetail/Movie';

export default function TVShowsPage(props) {
  const { id, tvData } = props;

  const { data: tvReviewsData } = useTVDetails({ queryParams: 'reviews', id });
  const { data: tvKeywordsData } = useTVDetails({ queryParams: 'keywords', id });

  return (
    <>
      <HEAD>
        <title>{tvData?.original_name}</title>
      </HEAD>
      <MovieDetail
        data={tvData}
        reviewsData={tvReviewsData?.results}
        keywordsData={tvKeywordsData?.results}
        type={discover_type.fields.tv.key}
      ></MovieDetail>
    </>
  );
}

TVShowsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const tvData = await getTV(id);

  return {
    props: { id, tvData },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
