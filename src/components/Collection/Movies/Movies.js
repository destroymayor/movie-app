import router from 'next/router';

import DetailTitle from '@/components/Collection/Common/DetailTitle';
import CoverImage from '@/components/Collection/Movies/CoverImage';
import StarRate from '@/components/Collection/Movies/StarRate';

const Movies = (props) => {
  const { data } = props;

  const parts = data?.parts;
  const getSliceData = parts
    ?.sort((after, before) => before.vote_average - after.vote_average)
    ?.slice(0, 6);

  const handleNavigation = (id) => router.push(`/movie/${id}`);

  return (
    <section className="w-full px-5 xl:px-24">
      <DetailTitle title={`${parts?.length} movies`} />

      {data?.length === 0 && <div className="py-5 text-black dark:text-white">No any movies</div>}

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
              <div className="truncate">{item?.title}</div>
              <span className="text-sm text-gray-400">{item?.release_date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Movies;
