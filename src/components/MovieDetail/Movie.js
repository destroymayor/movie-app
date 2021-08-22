import Image from 'next/image';
import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/tmdb/image-sizes';
import { discover_type } from '@/constants/fields/fields';

import ImdbLink from '@/components/MovieDetail/ImdbLink';
import { ClockIcon } from '@heroicons/react/solid';

const MovieDetail = (props) => {
  const { data, type } = props;

  const types = {
    [discover_type.fields.movie.key]: {
      title: data?.original_title,
      overview: data?.overview,
      vote_average: data?.vote_average,
      vote_count: data?.vote_count,
      release_date: data?.release_date?.slice(0, 4),
      runtime: data?.runtime,
      imdbId: data?.imdb_id,
    },
    [discover_type.fields.tv.key]: {
      title: data?.original_name,
      overview: data?.overview,
      vote_average: data?.vote_average,
      vote_count: data?.vote_count,
      release_date: data?.first_air_date?.slice(0, 4),
      runtime: null,
      imdbId: null,
    },
  };

  const backdropPathUrl = `${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${data?.backdrop_path}`;
  const imageUrl = `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${data?.poster_path}`;

  const getDataType = types[type];

  console.log(data);

  return (
    <main className="h-full flex flex-wrap justify-center relative dark:bg-gray-600 pb-10">
      <div
        className="absolute top-0 w-full h-3/5 bg-cover bg-center bg-blend-multiply bg-gray-600"
        style={{ backgroundImage: `url(${backdropPathUrl})` }}
      />

      <div className="w-9/12 z-10 ">
        <div className="flex flex-wrap py-14">
          <div className="flex shadow-2xl">
            <Image
              className="rounded"
              src={imageUrl}
              alt={getDataType?.title}
              width={285}
              height={428}
            />
          </div>

          <div className="flex-1 flex flex-col gap-2 px-8 text-white ">
            <span className="text-xl">{getDataType?.release_date}</span>
            <h1 className="text-3xl font-bold">{getDataType?.title}</h1>
            {getDataType?.runtime && (
              <div className="flex items-center">
                <ClockIcon className="w-7 h-7" />
                <span className="px-2 font-bold">{getDataType?.runtime} min</span>
              </div>
            )}

            <div className="flex gap-3 items-center py-2">
              <span className="px-3 py-2 rounded-md bg-yellow-300 text-black">
                {getDataType?.voteAverage}
              </span>
              <span className="font-bold">{getDataType?.voteCount} votes</span>
            </div>

            <ImdbLink id={getDataType?.imdbId} />
          </div>
        </div>

        <div className="px-0 xl:py-10 xl:p-10 ">
          <h2 className="text-3xl my-2">
            <span className="px-1 mr-4 bg-yellow-500"></span>
            <span className="text-gray-600 dark:text-white">OVERVIEW</span>
          </h2>
          <div className="text-lg leading-8 text-gray-700 dark:text-white">
            {getDataType?.overview}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
