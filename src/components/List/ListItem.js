import { useRouter } from 'next/router';

import CoverImage from '@/components/List/CoverImage';

const ListItem = (props) => {
  const { item } = props;
  const router = useRouter();

  const handleNavigation = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <li
      className="flex flex-col bg-gray-300 border border-gray-300 rounded-md m-5 p-5 cursor-pointer"
      onClick={() => handleNavigation(item.id)}
    >
      <div className="w-96 flex-auto flex flex-col pb-5 pl-2">
        <h2 className="text-xl font-bold">{item?.title}</h2>
        <span>Release date: {item?.release_date}</span>
        <span>Language: {item?.original_language}</span>
      </div>
      <CoverImage url={item?.poster_path} alt={item?.title} />
    </li>
  );
};

export default ListItem;
