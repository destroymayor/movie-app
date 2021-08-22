import { useRouter } from 'next/router';

import { dataFields } from '@/constants/fields';
import useMoviesFilter from '@/hooks/filters/use-movies-filter.hook';
import routes from '@/constants/routes';

import { SearchIcon } from '@heroicons/react/solid';

const SearchBar = () => {
  const router = useRouter();
  const { searchState, setSearchValue, setSearchMode } = useMoviesFilter();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleNavigation = () => {
    if (searchState.searchValue === '') return;

    setSearchMode(dataFields.movie.key);
    router.push(routes.search.index);
  };

  return (
    <div className="flex items-center w-auto h-10 pl-2 mx-4 bg-gray-100 border rounded-md border-gary-600 ">
      <input
        autoFocus
        className="w-24 h-full pl-2 text-black bg-gray-100 text-1xl sm:w-auto focus:outline-none"
        placeholder="Search for movies"
        value={searchState.searchValue}
        onChange={handleChange}
      />
      <div className="px-2 cursor-pointer" onClick={handleNavigation}>
        <SearchIcon className="w-6 text-gray-600 transition duration-200 ease-in-out hover:text-yellow-500 dark:hover:text-yellow-500" />
      </div>
    </div>
  );
};

export default SearchBar;
