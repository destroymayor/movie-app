import getMovies from '@/api/getMovies';
import getTVs from '@/api/getTVs';
import { MOVIE_DETAILS_API, TV_DETAILS_API } from '@/api/api';
import { POPULAR_PATH, NOW_PLAYING_PATH, UPCOMING_PATH, TOP_RATED_PATH } from '@/api/params';

import { dataFields } from '@/constants/fields';

import useMovies from '@/hooks/queries/use-movies.hook';

import Layout from '@/components/Layout/Layout';
import Index from '@/components/Index';

export default function HomePage(props) {
  const { getPopularMovies, getPopularTVShows } = props;
  const { movie, tv } = dataFields;

  const popularMoviesUrl = `${MOVIE_DETAILS_API}/${POPULAR_PATH}`;
  const popularTVsUrl = `${TV_DETAILS_API}/${POPULAR_PATH}`;
  const nowPlayingUrl = `${MOVIE_DETAILS_API}/${NOW_PLAYING_PATH}`;
  const UpcomingUrl = `${MOVIE_DETAILS_API}/${UPCOMING_PATH}`;
  const topRatedMoviesUrl = `${MOVIE_DETAILS_API}/${TOP_RATED_PATH}`;
  const topRatedTVsUrl = `${TV_DETAILS_API}/${TOP_RATED_PATH}`;

  const { data: getPopularMoviesData } = useMovies({
    queryPath: popularMoviesUrl,
    fallbackData: getPopularMovies,
  });
  const { data: getPopularTVShowsData } = useMovies({
    queryPath: popularTVsUrl,
    fallbackData: getPopularTVShows,
  });

  const { data: getNowPlayingData } = useMovies({
    queryPath: nowPlayingUrl,
    queryParams: 'region=US',
  });
  const { data: getUpcomingData } = useMovies({ queryPath: UpcomingUrl, queryParams: 'region=US' });

  const { data: getTopRatedMoviesData } = useMovies({ queryPath: topRatedMoviesUrl });
  const { data: getTopRatedTVShowsData } = useMovies({ queryPath: topRatedTVsUrl });

  const data = [
    {
      title: 'Most Popular Movies',
      type: movie.key,
      path: popularMoviesUrl,
      params: null,
      results: getPopularMoviesData?.results,
    },
    {
      title: 'Most Popular TV Shows',
      type: tv.key,
      path: popularTVsUrl,
      params: null,
      results: getPopularTVShowsData?.results,
    },
    {
      title: 'Now Playing',
      type: movie.key,
      path: nowPlayingUrl,
      params: 'region=US',
      results: getNowPlayingData?.results,
    },
    {
      title: 'Coming Soon',
      type: movie.key,
      path: UpcomingUrl,
      params: 'region=US',
      results: getUpcomingData?.results,
    },
    {
      title: 'Top Rated Movies',
      type: movie.key,
      path: topRatedMoviesUrl,
      params: null,
      results: getTopRatedMoviesData?.results,
    },
    {
      title: 'Top Rated Shows',
      type: tv.key,
      path: topRatedTVsUrl,
      params: 'region=US',
      results: getTopRatedTVShowsData?.results,
    },
  ];

  return <Index data={data} />;
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const getPopularMovies = await getMovies(POPULAR_PATH);
  const getPopularTVShows = await getTVs(POPULAR_PATH);

  return {
    props: {
      getPopularMovies,
      getPopularTVShows,
    },
    revalidate: 100,
  };
}
