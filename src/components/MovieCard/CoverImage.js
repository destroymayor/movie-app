import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import { PhotographIcon } from '@heroicons/react/outline';
import Image from '@/components/Common/Image';

const CoverImage = (props) => {
  const { url, alt } = props;

  const imageUrl = `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${url}`;

  return (
    <div className="flex justify-center flex-auto">
      {url ? (
        <Image className="rounded-t-md" src={imageUrl} alt={alt} width={285} height={428} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full text-gray-700 bg-gray-200 py-36 rounded-t-md dark:text-gray-500">
          <PhotographIcon className="w-20 h-20" />
          <span className="">No image available</span>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
