import getMovies from '@/api/getMovies';
import getTVs from '@/api/getTVs';
import { getPopularParams, getTopRatedParams, getBestMovieOfTheYearParams } from '@/api/params';

import { discover_type } from '@/constants/fields/fields';

import Layout from '@/components/Layout/Layout';
import Index from '@/components/Index';

export default function HomePage(props) {
  const { data } = props;

  return <Index data={data} />;
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const { movie, tv } = discover_type.fields;

  const getPopularMovies = await getMovies(getPopularParams);
  const getPopularTVShows = await getTVs(getPopularParams);
  const getTopRated = await getMovies(getTopRatedParams);
  const getBestMovieOfTheYear = await getMovies(getBestMovieOfTheYearParams);

  const data = [
    {
      title: 'Popular',
      type: movie.key,
      params: getPopularParams,
      results: getPopularMovies?.results,
    },
    {
      title: 'Popular TV Shows',
      type: tv.key,
      params: getPopularParams,
      results: getPopularTVShows?.results,
    },
    {
      title: 'Top Rated',
      type: movie.key,
      params: getTopRatedParams,
      results: getTopRated?.results,
    },
    {
      title: 'Best movie of the year',
      type: movie.key,
      params: getBestMovieOfTheYearParams,
      results: getBestMovieOfTheYear?.results,
    },
  ];

  return {
    props: {
      data,
    },
    revalidate: 100,
  };
}
