import HEAD from 'next/head';

import getMovie from '@/api/getMovie';
import { discover_type } from '@/constants/fields/fields';

import Layout from '@/components/Layout/Layout';
import MovieDetail from '@/components/MovieDetail/Movie';

export default function MoviePage(props) {
  const { data } = props;

  const originTitle = data?.original_title;

  return (
    <>
      <HEAD>
        <title>{originTitle}</title>
      </HEAD>
      <MovieDetail data={data} type={discover_type.fields.movie.key}></MovieDetail>
    </>
  );
}

MoviePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const data = await getMovie(params?.id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
