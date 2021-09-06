import Image from 'next/image';

import { PhotographIcon } from '@heroicons/react/outline';
import { IMAGE_URL_W300 } from '@/api/api';

const CoverImage = (props) => {
  const { url, alt } = props;

  const imageUrl = `${IMAGE_URL_W300}${url}`;

  return (
    <div className="flex-auto flex justify-center">
      {url ? (
        <Image className="rounded-t-md" src={imageUrl} alt={alt} width={300} height={450} />
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full py-36 rounded-t-md bg-gray-200 text-gray-700 dark:text-gray-500">
          <PhotographIcon className="w-20 h-20" />
          <span className="">No image available</span>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
