import router from 'next/router';

import { dataFields } from '@/constants/fields';

import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import { PhotographIcon } from '@heroicons/react/outline';
import Image from '@/components/Common/Image';
import DetailTitle from '@/components/Person/Common/DetailTitle';
import Sliders from '@/components/Common/Sliders';

const KnownFor = (props) => {
  const { data } = props;

  const handleNavigation = (id) => router.push(`/${dataFields.movie.key}/${id}`);

  return (
    <div className="pt-5">
      <DetailTitle title="Known For" />

      <Sliders data={data?.cast}>
        {({ item }) => (
          <div
            className="relative flex flex-col items-center mx-2 my-3 text-gray-700 rounded-md cursor-pointer w-44 dark:text-white"
            onClick={() => handleNavigation(item.id)}
          >
            <div style={{ width: 154, height: 217 }}>
              {item.poster_path ? (
                <Image
                  className="rounded-md"
                  src={`${IMAGE_URL}/${imageSizes.posterSizes.w185}/${item.poster_path}`}
                  alt={item.title}
                  width={154}
                  height={217}
                  objectFit="cover"
                  objectPosition="center"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-700 bg-gray-200 rounded-md dark:text-gray-500">
                  <PhotographIcon className="w-10 h-10" />
                  <span className="px-2 text-center">No image available</span>
                </div>
              )}
            </div>
            <div className="py-2 text-center">{item?.title}</div>
          </div>
        )}
      </Sliders>
    </div>
  );
};

export default KnownFor;
