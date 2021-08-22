import router from 'next/router';

import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import { PhotographIcon } from '@heroicons/react/outline';
import Image from '@/components/Common/Image';

export const ListPrimary = (props) => {
  const { type, loading, data = [] } = props;

  const handleNavigation = (id) => router.push(`/${type}/${id}`);

  if (loading)
    return (
      <div className="flex m-2 text-black bg-gray-200 rounded-md shadow-lg h-36 animate-pulse">
        <div className="w-24 h-full bg-gray-300 rounded-l-md"></div>
        <div className="flex flex-col justify-center flex-1 px-5 truncate border-t border-b border-r border-gray-300 rounded-r-md gap-y-5">
          <span className="w-32 h-4 bg-gray-300 rounded-md"></span>
          <span className="w-20 h-4 bg-gray-300 rounded-md"></span>

          <span className="h-4 bg-gray-300 rounded-md w-52"></span>
        </div>
      </div>
    );

  return (
    <ul className="flex flex-col m-2 gap-x-3 gap-y-4">
      {data?.map((item, index) => {
        const imageUrl = `${IMAGE_URL}/${imageSizes.posterSizes.w185}/${item.poster_path}`;
        const title = item.title || item.name;
        const release_date = item?.release_date || item?.first_air_date;
        const overview = item?.overview;
        return (
          <li
            className="flex text-black transition duration-200 ease-in-out rounded-md shadow-lg cursor-pointer hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-black group"
            key={`${item?.id} - ${title} - ${index}`}
            onClick={() => handleNavigation(item?.id)}
          >
            {item.poster_path ? (
              <Image
                className="rounded-l-md"
                src={imageUrl}
                alt={title}
                width={102}
                height={147}
                objectFit="cover"
                objectPosition="center"
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center text-gray-700 bg-gray-200 h-36 rounded-l-md dark:text-gray-500"
                style={{ width: 102 }}
              >
                <PhotographIcon className="w-5 h-5" />
              </div>
            )}

            <div className="flex flex-col justify-center flex-1 px-5 truncate border-t border-b border-r border-gray-300 rounded-r-md gap-y-5">
              <div>
                <h3 className="font-semibold">{title}</h3>
                <span className="text-gray-400 ">{release_date}</span>
              </div>

              <span className="overflow-hidden text-gray-600 dark:text-gray-300 overflow-ellipsis group-hover:text-gray-600">
                {overview}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListPrimary;
