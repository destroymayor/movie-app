import { useRouter } from 'next/router';

import { dataFields } from '@/constants/fields';

import { StarIcon } from '@heroicons/react/solid';
import CoverImage from '@/components/MovieCard/CoverImage';

const MovieCard = (props) => {
  const { type, data } = props;
  const router = useRouter();

  const handleNavigation = () => router.push(`/${type}/${data.id}`);

  const types = {
    [dataFields.movie.key]: {
      ...data,
      title: data?.title,
      release_date: data?.release_date?.slice(0, 4),
    },
    [dataFields.tv.key]: {
      ...data,
      title: data?.original_name,
      release_date: data?.first_air_date?.slice(0, 4),
    },
  };

  const id = types?.[type]?.id;
  const coverImage = types?.[type]?.poster_path;
  const title = types?.[type]?.title;
  const releaseDate = types?.[type]?.release_date;
  const voteAverage = types?.[type]?.vote_average;

  return (
    <div
      className="flex flex-col m-5 transition duration-500 ease-in-out rounded-md shadow-lg cursor-pointer w-72 hover:-translate-y-1 hover:scale-105"
      onClick={handleNavigation}
    >
      <CoverImage url={coverImage} alt={id} />
      <div className="flex justify-between p-2 text-black flex-0 dark:bg-gray-500 dark:text-white rounded-b-md">
        <div className="flex flex-col flex-wrap justify-center flex-1 pl-1 pr-2">
          <div className="w-48 text-lg truncate">{title}</div>
          <div className="text-gray-500 dark:text-gray-200">{releaseDate}</div>
        </div>

        <div className="flex items-center justify-center pt-2 pb-2 mt-1 mb-1 rounded-md w-14">
          <StarIcon className="w-5 h-6 pr-1 text-yellow-500" />
          <span className="text-yellow-800 dark:text-yellow-400">{voteAverage}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
