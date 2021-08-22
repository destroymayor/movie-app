import router from 'next/router';

import useMoviesFilter from '@/hooks/filters/use-movies-filter.hook';
import routes from '@/constants/routes';
import { ChevronRightIcon } from '@heroicons/react/outline';

const Header = (props) => {
  const { data } = props;
  const { setSeeMoreMovies } = useMoviesFilter();

  const handleMoreMovies = () => {
    const { title, type, path, params } = data;
    setSeeMoreMovies({ title, type, path, params });

    router.push(routes.seeMore);
  };

  const title = data?.title;

  return (
    <div className="flex items-center px-2 pt-2 md:px-5">
      <h2 className="text-2xl">
        <span className="px-1 mr-2 bg-yellow-500"></span>
        <span className="text-gray-600 dark:text-white">{title}</span>
      </h2>

      <button
        className="flex items-center text-gray-600 transition duration-200 ease-in-out group dark:text-white md:px-2 hover:text-yellow-500 dark:hover:text-yellow-500"
        onClick={handleMoreMovies}
      >
        <ChevronRightIcon className="w-8 h-8" />
        <span className="invisible text-yellow-500 group-hover:visible">SEE MORE</span>
      </button>
    </div>
  );
};

export default Header;
