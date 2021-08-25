import useMovies from '@/hooks/useMovies';

import getPopularMovie from '@/api/getPopularMovie';

import Home from '@/components/Index';

export default function HomePage(props) {
  const { data } = props;
  useMovies(data);

  return <Home />;
}

export async function getStaticProps() {
  const data = await getPopularMovie();

  return {
    props: { data },
    revalidate: 100,
  };
}
