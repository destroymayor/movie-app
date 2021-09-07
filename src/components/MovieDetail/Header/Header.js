import Image from 'next/image';

import ImdbLink from '@/components/Common/ImdbLink';
import { ClockIcon } from '@heroicons/react/solid';

const Header = (props) => {
  const { data } = props;

  return (
    <div
      className="w-full h-3/5 flex flex-wrap justify-center md:justify-start py-14 px-10 md:px-20 bg-cover bg-center bg-blend-multiply bg-gray-700"
      style={{ backgroundImage: `url(${data?.backdrop_path})` }}
    >
      <Image
        className="flex shadow-2xl rounded"
        src={data?.poster_path}
        alt={data?.title}
        width={285}
        height={428}
      />

      <div className="flex-1 flex flex-col gap-2 px-8 py-3 text-white">
        <span className="text-xl">{data?.releaseDate}</span>
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        {data?.runtime && (
          <div className="flex items-center">
            <ClockIcon className="w-7 h-7" />
            <span className="px-2 font-bold">{data?.runtime} min</span>
          </div>
        )}

        <div className="flex gap-3 items-center py-2">
          <span className="px-3 py-2 rounded-md bg-yellow-300 text-black">
            {data?.vote_average}
          </span>
          <span className="font-bold">{data?.vote_count} votes</span>
        </div>

        <ImdbLink id={data?.imdbId} />
      </div>
    </div>
  );
};

export default Header;
