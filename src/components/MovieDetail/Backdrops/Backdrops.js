import Image from 'next/image';

import useSlidersToggle from '@/hooks/utils/useSlidersToggle';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/tmdb/image-sizes';

const Backdrops = (props) => {
  const { data } = props;

  const { activeIndex, isPreviousEnd, isNextEnd, toggleSliders } = useSlidersToggle({
    totalSize: data.backdrops.length,
    itemWidth: 1200,
  });

  const handleToggle = (direction) => toggleSliders(direction);

  return (
    <div className="flex items-center relative" style={{ width: '97vw' }}>
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
          style={{ transform: `translate3d(calc(-${1200}px * ${activeIndex}), 0px, 0px)` }}
        >
          {data.backdrops.map((item) => (
            <li key={item.file_path}>
              <Image
                alt={item.file_path}
                src={`${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${item.file_path}`}
                width={1280}
                height={720}
              />
            </li>
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

export default Backdrops;
