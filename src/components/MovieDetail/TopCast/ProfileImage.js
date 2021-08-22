import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import { PhotographIcon } from '@heroicons/react/outline';
import Image from '@/components/Common/Image';

const ProfileImage = (props) => {
  const { url, alt, width = 154, height = 231 } = props;

  const imageUrl = `${IMAGE_URL}/${imageSizes.profileSizes.h632}/${url}`;

  return (
    <div className="flex justify-center">
      {url ? (
        <Image className="rounded-md" src={imageUrl} alt={alt} width={width} height={height} />
      ) : (
        <div
          style={{ width, height }}
          className="flex flex-col items-center justify-center px-2 text-gray-700 bg-gray-200 rounded-md dark:text-gray-500"
        >
          <PhotographIcon className="w-10 h-10" />
          <span className="text-center">No image available</span>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
