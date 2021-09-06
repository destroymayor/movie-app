import HEAD from 'next/head';

import getMovie from '@/api/getMovie';

import Layout from '@/components/Layout/Layout';
import Movie from '@/components/Movie/Movie';

export default function MoviePage(props) {
  const { data } = props;

  const originTitle = data?.original_title;

  return (
    <>
      <HEAD>
        <title>{originTitle}</title>
      </HEAD>
      <Movie data={data}></Movie>
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
