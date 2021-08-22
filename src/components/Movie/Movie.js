import { useRouter } from 'next/router';

import Image from 'next/image';
import { IMAGE_URL_W300, IMAGE_URL_ORIGINAL } from '@/api/api';

import ImdbLink from '@/components/Movie/ImdbLink';

const Movie = (props) => {
  const { data } = props;
  const router = useRouter();

  console.log(data);

  const backdropPathUrl = `${IMAGE_URL_ORIGINAL}${data?.backdrop_path}`;
  const imageUrl = `${IMAGE_URL_W300}${data?.poster_path}`;
  const title = data?.original_title;
  const overview = data?.overview;
  const voteAverage = data?.vote_average;
  const releaseDate = data?.release_date;
  const runtime = data?.runtime;
  const imdbId = data?.imdb_id;

  if (router.isFallback) return <div className="h-screen">loading...</div>;

  return (
    <main className="flex flex-wrap justify-center">
      <div className="flex-initial flex justify-center p-10 bg-gray-200">
        <Image className="rounded" src={imageUrl} alt={title} width={300} height={450} />
      </div>
      <div className="flex-initial py-10 px-2 bg-gray-300">
        <h1 className="text-3xl">{title}</h1>
        <div className="">{voteAverage} / 10</div>
        <div className="">{releaseDate}</div>
        <div>{runtime} min</div>
        <ImdbLink id={imdbId} />
        <div className="max-w-lg p-2">{data?.overview}</div>
      </div>
    </main>
  );
};

export default Movie;
