import router from 'next/router';

import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';

import CoverImage from '@/components/MovieDetail/Recommended/CoverImage';

const Recommended = (props) => {
  const { data, type } = props;

  const getSliceData = data
    ?.sort((after, before) => before.vote_average - after.vote_average)
    ?.slice(0, 6);

  const handleNavigation = (id) => router.push(`/${type}/${id}`);

  if (!data) return <div />;

  return (
    <div className="w-full px-5 xl:px-24">
      <DetailTitle title="RECOMMENDED MOVIES" />

      {data?.length === 0 && <div className="py-5 text-black dark:text-white">No any movies</div>}

      <ul className="flex flex-wrap">
        {getSliceData?.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center w-44 h-80 relative mx-4 my-6 cursor-pointer text-gray-700 dark:text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
            onClick={() => handleNavigation(item?.id)}
          >
            <div className="absolute -top-4 left-auto z-10 flex justify-center items-center w-14 h-8 rounded-full shadow-md bg-yellow-500">
              {item.vote_average.toFixed(1)}
            </div>
            <CoverImage url={item.poster_path} alt={item.title} />
            <div className="w-full p-2 truncate">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommended;
