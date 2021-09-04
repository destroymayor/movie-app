import { useRouter } from 'next/router';

import useSearchMovie from '@/hooks/useSearchMovie';
import { mode } from '@/constants/fields/fields';

import { SearchIcon } from '@heroicons/react/solid';

const SearchButton = () => {
  const router = useRouter();
  const { setSearchMode } = useSearchMovie();

  const searchRoute = '/search';

  const handleNavigation = () => {
    setSearchMode(mode.search);
    router.push(searchRoute);
  };

  return (
    <>
      {router.pathname !== searchRoute && (
        <div
          className="p-2 rounded-full transition duration-200 ease-in-out cursor-pointer text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-100"
          onClick={handleNavigation}
        >
          <SearchIcon className="w-6 h-6" />
        </div>
      )}
    </>
  );
};

export default SearchButton;
