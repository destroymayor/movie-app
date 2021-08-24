import Image from 'next/image';
import { IMAGE_URL } from '@/api/api';

const Movie = (props) => {
  const { data, loading } = props;

  console.log(data);
  const imageUrl = `${IMAGE_URL}${data?.poster_path}`;

  if (loading) return <div className="dark:bg-gray-800 h-screen">loading...</div>;

  return (
    <div className="dark:bg-gray-800 h-screen flex flex-col items-center">
      <h1 className="dark:text-white">{data?.original_title}</h1>
      <div className="dark:text-white">{data?.overview}</div>
      <div>
        <Image src={imageUrl} alt={data?.original_title} width={300} height={450} />
      </div>
    </div>
  );
};

export default Movie;
