import { useRouter } from 'next/router';

import Image from 'next/image';
import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/tmdb/image-sizes';

import ImdbLink from '@/components/Movie/ImdbLink';
import { ClockIcon } from '@heroicons/react/solid';

const Movie = (props) => {
  const { data } = props;
  const router = useRouter();

  const backdropPathUrl = `${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${data?.backdrop_path}`;
  const imageUrl = `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${data?.poster_path}`;
  const title = data?.original_title;
  const overview = data?.overview;
  const voteAverage = data?.vote_average;
  const voteCount = data?.vote_count;
  const releaseDate = data?.release_date;
  const runtime = data?.runtime;
  const imdbId = data?.imdb_id;

  console.log(data);
  if (router.isFallback) return <div className="h-screen">loading...</div>;

  return (
    <main className="h-full flex flex-wrap justify-center relative dark:bg-gray-600 pb-10">
      <div
        className="absolute top-0 w-full h-96 bg-cover bg-center bg-blend-multiply bg-gray-600"
        style={{ backgroundImage: `url(${backdropPathUrl})` }}
      />

      <div className="w-9/12 z-10 flex flex-wrap justify-center pt-44">
        <div className="flex-1 w-96 flex justify-center px-5">
          <Image className="rounded" src={imageUrl} alt={title} width={300} height={450} />
        </div>

        <div className="flex-auto flex flex-col justify-around">
          <div className="flex flex-col gap-2 py-10 px-2 text-white">
            <h1 className="text-3xl">{title}</h1>
            <div className="flex items-center">
              <ClockIcon className="w-7 h-7" />
              <span className="px-2">{runtime} min</span> /{' '}
              <span className="px-2">{releaseDate}</span>
            </div>

            <div className="flex gap-3 items-center py-2">
              <ImdbLink id={imdbId} />
              <span className="px-3 py-2 rounded-md bg-yellow-500 ">{voteAverage}</span>
              <span className="">{voteCount} votes</span>
            </div>
          </div>

          <div className="max-w-md">
            <h2 className="text-3xl text-yellow-500">OVERVIEW</h2>
            <div className="text-lg dark:text-white">{overview}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Movie;
