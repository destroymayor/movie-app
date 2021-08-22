import HEAD from 'next/head';

import getTV from '@/api/getTV';
import { discover_type } from '@/constants/fields/fields';

import Layout from '@/components/Layout/Layout';
import MovieDetail from '@/components/MovieDetail/Movie';

export default function TVShowsPage(props) {
  const { data } = props;

  const originName = data?.original_name;

  return (
    <>
      <HEAD>
        <title>{originName}</title>
      </HEAD>
      <MovieDetail data={data} type={discover_type.fields.tv.key}></MovieDetail>
    </>
  );
}

TVShowsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const data = await getTV(params?.id);

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
