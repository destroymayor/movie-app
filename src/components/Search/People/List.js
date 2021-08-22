import router from 'next/router';

import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';
import { dataFields } from '@/constants/fields';

import { UserIcon } from '@heroicons/react/outline';
import Image from '@/components/Common/Image';

export const List = (props) => {
  const { data = [] } = props;

  const handleNavigation = (id) => {
    router.push(`/${dataFields.person.key}/${id}`);
  };

  return (
    <ul className="flex flex-col m-2 gap-x-3 gap-y-6">
      {data?.map((item, index) => {
        const imageUrl = `${IMAGE_URL}/${imageSizes?.profileSizes.w185}/${item?.profile_path}`;
        const id = item?.id;
        const name = item?.name;
        const knownForDepartment = item?.known_for_department;
        const getKnownForList = item?.known_for?.map((item) => item.title || item.name);

        return (
          <li
            className="flex items-center text-black transition duration-200 ease-in-out rounded-md cursor-pointer group gap-x-4 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-black"
            key={`${id} - ${name} - ${index}`}
            onClick={() => handleNavigation(id)}
          >
            {item?.profile_path ? (
              <Image
                className="rounded-md"
                src={imageUrl}
                alt={name}
                width={70}
                height={70}
                objectFit="cover"
                objectPosition="center"
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center text-gray-700 bg-gray-300 rounded-md dark:text-gray-500"
                style={{ width: 70, height: 70 }}
              >
                <UserIcon className="w-5 h-5" />
              </div>
            )}

            <div className="flex flex-col">
              <span className="font-semibold">{name}</span>
              <span>
                {knownForDepartment}
                <span className="px-1">•</span>
                {getKnownForList?.map(
                  (subItem, subItemIndex, { length, lastIndex = length - 1 }) => (
                    <span className="px-1" key={`${subItem} - ${subItemIndex}`}>
                      {subItem}
                      {subItemIndex !== lastIndex && ','}
                    </span>
                  )
                )}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
