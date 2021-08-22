import { useRouter } from 'next/router';

import { discover_type } from '@/constants/fields/fields';

import { StarIcon } from '@heroicons/react/solid';
import CoverImage from '@/components/MovieCard/CoverImage';

const MovieCard = (props) => {
  const { type, data } = props;
  const router = useRouter();

  const handleNavigation = () => router.push(`/${type}/${data.id}`);

  const titleType = {
    [discover_type.fields.movie.key]: data?.title,
    [discover_type.fields.tv.key]: data?.original_name,
  };

  const id = data?.id;
  const coverImage = data?.poster_path;
  const title = titleType?.[type];
  const releaseDate = data?.release_date?.slice(0, 4);
  const voteAverage = data?.vote_average;

  return (
    <li
      className="w-96 sm:w-72 flex flex-col m-5 rounded-md shadow-lg cursor-pointer transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
      onClick={handleNavigation}
    >
      <CoverImage url={coverImage} alt={id} />
      <div className="flex-0 flex justify-between p-2">
        <div className="flex-1 flex flex-col flex-wrap justify-center pl-1 pr-2">
          <div className="w-48 text-lg truncate">{title}</div>
          <div className="text-gray-500">{releaseDate}</div>
        </div>

        <div className="w-14 flex justify-center items-center  pt-2 pb-2 mt-1 mb-1 rounded-md">
          <StarIcon className="h-6 w-5 pr-1 text-yellow-500" />
          <span className="text-yellow-800">{voteAverage}</span>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
