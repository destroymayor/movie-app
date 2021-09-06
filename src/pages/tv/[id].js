import HEAD from 'next/head';

import getTV from '@/api/getTV';

import Layout from '@/components/Layout/Layout';
import TV from '@/components/TV/TV';

export default function MoviePage(props) {
  const { data } = props;

  const originName = data?.original_name;

  return (
    <>
      <HEAD>
        <title>{originName}</title>
      </HEAD>
      <TV data={data}></TV>
    </>
  );
}

MoviePage.getLayout = function getLayout(page) {
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
