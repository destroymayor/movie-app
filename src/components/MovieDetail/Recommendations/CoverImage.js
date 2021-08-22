import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import { PhotographIcon } from '@heroicons/react/outline';
import Image from '@/components/Common/Image';

const CoverImage = (props) => {
  const { url, alt } = props;

  const imageUrl = `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${url}`;

  return (
    <div className="flex justify-center flex-auto w-full">
      {url ? (
        <Image className="rounded-md" src={imageUrl} alt={alt} width={185} height={278} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full text-gray-700 bg-gray-200 rounded-md dark:text-gray-500">
          <PhotographIcon className="w-10 h-10" />
          <span className="">No image available</span>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
