import Image from 'next/image';

import { PhotographIcon } from '@heroicons/react/outline';
import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/tmdb/image-sizes';

const CoverImage = (props) => {
  const { url, alt } = props;

  const imageUrl = `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${url}`;

  return (
    <div className="flex-auto flex justify-center">
      {url ? (
        <Image className="rounded-t-md" src={imageUrl} alt={alt} width={185} height={278} />
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full py-36 rounded-t-md bg-gray-200 text-gray-700 dark:text-gray-500">
          <PhotographIcon className="w-10 h-10" />
          <span className="">No image available</span>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
