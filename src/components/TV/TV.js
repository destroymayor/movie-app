import { useRouter } from 'next/router';

import Image from 'next/image';
import { IMAGE_URL_W300 } from '@/api/api';

const TV = (props) => {
  const { data } = props;
  const router = useRouter();

  const imageUrl = `${IMAGE_URL_W300}${data?.poster_path}`;

  if (router.isFallback) return <div className="dark:bg-gray-800 h-screen">loading...</div>;

  return (
    <div className="dark:bg-gray-800 w-full h-screen flex flex-col items-center">
      <h1 className="max-w-lg p-2 text-2xl dark:text-white">{data?.original_name}</h1>
      <div className="max-w-lg p-2 dark:text-white text-center">{data?.overview}</div>
      <div className="p-10">
        <Image src={imageUrl} alt={data?.original_name} width={300} height={450} />
      </div>
    </div>
  );
};

export default TV;
