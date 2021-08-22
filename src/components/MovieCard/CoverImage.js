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
        <div className="flex flex-col justify-center items-center w-full h-full rounded-t-md bg-gray-300 py-36">
          <PhotographIcon className="w-20 h-20 text-gray-500" />
          <span className="text-gray-600">No image available</span>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
