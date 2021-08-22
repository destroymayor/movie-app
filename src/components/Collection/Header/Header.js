import { IMAGE_URL } from '@/api/api';
import imageSizes from '@/constants/image-sizes';

import Image from '@/components/Common/Image';

const Header = (props) => {
  const { data } = props;

  const backdropPath = `${IMAGE_URL}/${imageSizes.backdropSizes.w1280}/${data?.backdrop_path}`;
  const posterPath = `${IMAGE_URL}/${imageSizes.posterSizes.w342}/${data?.poster_path}`;
  const title = data?.name;
  const parts = data?.parts;

  return (
    <header className="relative flex flex-wrap justify-center w-full px-10 z-1 h-3/5 md:justify-start py-14 md:px-20">
      <Image
        className="z-0 bg-gray-700 mix-blend-multiply "
        src={backdropPath}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <Image
        className="flex rounded shadow-2xl"
        src={posterPath}
        alt={title}
        width={285}
        height={428}
      />

      <div className="relative flex flex-col flex-auto gap-2 px-8 py-3 text-white">
        <h1 className="text-3xl font-bold">{title}</h1>

        <div>
          <span className="font-bold">Number of Movies :</span>
          <span className="px-2 text-gray-300">{parts?.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
