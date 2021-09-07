import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/tmdb/image-sizes';
import { discover_type } from '@/constants/fields/fields';

import Header from '@/components/MovieDetail/Header/Header';
import Overview from '@/components/MovieDetail/Overview/Overview';
import Backdrops from '@/components/MovieDetail/Backdrops/Backdrops';
import Reviews from '@/components/MovieDetail/Reviews/Reviews';
import Keywords from '@/components/MovieDetail/Keywords/Keywords';
import Recommended from '@/components/MovieDetail/Recommended/Recommended';

const MovieDetail = (props) => {
  const { data, reviewsData, keywordsData, recommendedData, type } = props;

  const types = {
    [discover_type.fields.movie.key]: {
      backdrop_path: `${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${data?.backdrop_path}`,
      poster_path: `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${data?.poster_path}`,
      title: data?.original_title,
      overview: data?.overview,
      vote_average: data?.vote_average,
      vote_count: data?.vote_count,
      release_date: data?.release_date?.slice(0, 4),
      runtime: data?.runtime,
      imdbId: data?.imdb_id,
    },
    [discover_type.fields.tv.key]: {
      backdrop_path: `${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${data?.backdrop_path}`,
      poster_path: `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${data?.poster_path}`,
      title: data?.original_name,
      overview: data?.overview,
      vote_average: data?.vote_average,
      vote_count: data?.vote_count,
      release_date: data?.first_air_date?.slice(0, 4),
      runtime: null,
      imdbId: null,
    },
  };

  return (
    <main className="h-full flex flex-wrap justify-center gap-10 relative dark:bg-gray-600 pb-10">
      <Header data={types[type]} />

      <Overview data={types[type]?.overview} />
      {/* <Backdrops data={movieImages} /> */}
      <Reviews data={reviewsData} />
      <Keywords data={keywordsData} />
      <Recommended data={recommendedData} type={type} />
    </main>
  );
};

export default MovieDetail;
