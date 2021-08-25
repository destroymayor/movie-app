import getMovie from '@/api/getMovie';

import Movie from '@/components/Movie/Movie';

export default function MoviePage(props) {
  const { data } = props;

  return <Movie data={data}></Movie>;
}

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
