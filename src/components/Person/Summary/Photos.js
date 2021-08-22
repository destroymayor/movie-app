import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import { PhotographIcon } from '@heroicons/react/outline';
import Image from '@/components/Common/Image';
import DetailTitle from '@/components/Person/Common/DetailTitle';
import Sliders from '@/components/Common/Sliders';

const Photos = (props) => {
  const { data } = props;

  return (
    <div className="pt-5">
      <DetailTitle title="Photos" />

      <Sliders data={data?.profiles}>
        {({ item }) => (
          <div className="relative flex flex-col items-center mx-2 my-3 text-gray-700 rounded-md cursor-pointer dark:text-white">
            <div style={{ width: 154, height: 217 }}>
              {item?.file_path ? (
                <Image
                  className="rounded-md"
                  src={`${IMAGE_URL}/${imageSizes.profileSizes.w185}/${item?.file_path}`}
                  alt={item.file_path}
                  width={154}
                  height={217}
                  objectFit="cover"
                  objectPosition="center"
                />
              ) : (
                <div className="flex flex-col items-center justify-center px-2 text-gray-700 bg-gray-200 rounded-md dark:text-gray-500">
                  <PhotographIcon className="w-10 h-10" />
                  <span className="text-center">No image available</span>
                </div>
              )}{' '}
            </div>
          </div>
        )}
      </Sliders>
    </div>
  );
};

export default Photos;
