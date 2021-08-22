import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';
import { dataFields } from '@/constants/fields';
import covertMinsToHrsMins from '@/helpers/date/covert-mins-to-hrs-mins';

import Image from '@/components/Common/Image';
import Genres from '@/components/MovieDetail/Header/Genres';
import Rating from '@/components/MovieDetail/Header/Rating';
import SocialLinks from '@/components/Common/SocialLinks';
import { ClockIcon } from '@heroicons/react/solid';

const Header = (props) => {
  const { data, type } = props;

  const types = {
    [dataFields.movie.key]: {
      ...data,
      backdrop_path: `${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${data?.backdrop_path}`,
      poster_path: `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${data?.poster_path}`,
      title: data?.original_title,
      release_date: data?.release_date?.slice(0, 4),
      runtime: data?.runtime,
      imdbId: data?.imdb_id,
    },
    [dataFields.tv.key]: {
      ...data,
      backdrop_path: `${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${data?.backdrop_path}`,
      poster_path: `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${data?.poster_path}`,
      title: data?.original_name,
      release_date: data?.first_air_date?.slice(0, 4),
      runtime: null,
      imdbId: null,
    },
  };

  const getDetailData = types[type];

  return (
    <header className="relative flex flex-wrap justify-center w-full px-10 z-1 h-3/5 md:justify-start py-14 md:px-20">
      <Image
        className="z-0 bg-gray-700 mix-blend-multiply "
        src={getDetailData?.backdrop_path}
        alt={getDetailData?.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <Image
        className="flex rounded shadow-2xl"
        src={getDetailData?.poster_path}
        alt={getDetailData?.title}
        width={285}
        height={428}
      />

      <div className="relative flex flex-col flex-auto gap-2 px-8 py-3 text-white">
        <div className="flex items-center">
          <span className="pr-2 text-xl">{getDetailData?.release_date}</span>
          <ClockIcon className="w-7 h-7" />
          <span className="px-2 font-bold">{covertMinsToHrsMins(getDetailData?.runtime)}</span>
        </div>

        <h1 className="text-3xl font-bold">{getDetailData?.title}</h1>

        <Genres data={getDetailData?.genres} />

        <div>
          <span className="font-bold">Taglines</span>
          <span className="px-2 text-gray-300">{getDetailData?.tagline}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-3">
          <Rating data={getDetailData} />
          <SocialLinks data={getDetailData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
