import router from 'next/router';

import { dataFields } from '@/constants/fields';

import CoverImage from '@/components/MovieDetail/Recommendations/CoverImage';
import StarRate from '@/components/MovieDetail/Recommendations/StarRate';

const List = (props) => {
  const { data, type } = props;

  const getSliceData = data
    ?.sort((after, before) => before.vote_average - after.vote_average)
    ?.slice(0, 6);

  const titleTypes = {
    [dataFields.movie.key]: {
      title: 'title',
      release_date: 'release_date',
    },
    [dataFields.tv.key]: {
      title: 'name',
      release_date: 'first_air_date',
    },
  };

  const handleNavigation = (id) => router.push(`/${type}/${id}`);

  return (
    <ul className="flex flex-wrap justify-center sm:justify-start">
      {getSliceData?.map((item) => (
        <li
          key={item?.id}
          className="relative flex flex-col items-center mx-2 my-6 text-gray-700 transition duration-500 ease-in-out rounded-md cursor-pointer w-44 dark:text-white hover:-translate-y-1 hover:scale-105"
          onClick={() => handleNavigation(item?.id)}
        >
          <StarRate data={item?.vote_average} />
          <CoverImage url={item?.poster_path} alt={item?.title} />
          <div className="w-full px-2 py-2 ">
            <div className="truncate">{item?.[titleTypes[type]?.title]}</div>
            <span className="text-sm text-gray-400">{item?.[titleTypes[type]?.release_date]}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
