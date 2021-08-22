import { StarIcon } from '@heroicons/react/solid';

const Rating = (props) => {
  const { data } = props;

  return (
    <div className="flex items-center gap-3 py-2">
      <StarIcon className="w-7 h-7 text-yellow-400" />
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg">
          {data?.vote_average} <span className="text-sm font-normal text-gray-300"> / 10</span>
        </span>
        <span className="text-sm">({data?.vote_count})</span>
      </div>
    </div>
  );
};

export default Rating;
