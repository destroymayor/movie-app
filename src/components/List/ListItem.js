import { useRouter } from 'next/router';

import CoverImage from '@/components/List/CoverImage';

const ListItem = (props) => {
  const { item } = props;
  const router = useRouter();

  const handleNavigation = (id) => {
    router.push(`/movie/${id}`);
  };

  console.log(item);

  return (
    <li
      className="w-72 flex flex-col bg-gray-300 rounded-md m-5 cursor-pointer"
      onClick={() => handleNavigation(item.id)}
    >
      <CoverImage url={item?.poster_path} alt={item?.title} />
      <div className="flex justify-between p-2">
        <div className="flex-1 flex flex-col flex-wrap justify-center">
          <div className="pr-2 break-all">
            <span>{item?.title}</span> <span>({item?.release_date?.slice(0, 4)})</span>
          </div>
        </div>
        <div className="w-16 flex justify-center items-center">
          <div className="w-10 flex justify-center items-center bg-gray-500 p-2 rounded-md text-white">
            {item?.vote_average}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
