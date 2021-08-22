import useSlidersToggle from '@/hooks/utils/useSlidersToggle';

import MovieCard from '@/components/MovieCard/MovieCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const cardItemSize = 316;

const Sliders = (props) => {
  const { data, type } = props;

  const { activeIndex, isPreviousEnd, isNextEnd, toggleSliders } = useSlidersToggle({
    totalSize: data.length,
    itemWidth: cardItemSize,
  });

  const handleToggle = (direction) => toggleSliders(direction);

  return (
    <div className="flex items-center" style={{ width: '97vw' }}>
      {isPreviousEnd && (
        <button
          className="absolute left-1 z-10 h-1/3 rounded-md p-1 hidden sm:block text-yellow-500 transition duration-200 ease-in-out hover:text-yellow-600 dark:hover:bg-gray-300"
          onClick={() => handleToggle('previous')}
        >
          <ChevronLeftIcon className="w-10 h-10" />
        </button>
      )}

      <div className="relative overflow-x-scroll sm:overflow-hidden ml-6 mr-12">
        <ul
          className="flex relative top-0 transition-all duration-300 ease-in"
          style={{ transform: `translate3d(calc(-${cardItemSize}px * ${activeIndex}), 0px, 0px)` }}
        >
          {data?.map((movie) => (
            <MovieCard key={movie.id} type={type} data={movie} />
          ))}
        </ul>
      </div>

      {isNextEnd && (
        <button
          className="absolute right-1 z-10 h-1/3 rounded-md p-1 hidden sm:block text-yellow-500 transition duration-200 ease-in-out hover:text-yellow-600 dark:hover:bg-gray-300"
          onClick={() => handleToggle('next')}
        >
          <ChevronRightIcon className="w-10 h-10" />
        </button>
      )}
    </div>
  );
};

export default Sliders;
