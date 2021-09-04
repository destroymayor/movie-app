import { SearchIcon } from '@heroicons/react/solid';

import useSearchMovie from '@/hooks/useSearchMovie';

const SearchBar = () => {
  const { searchState, setSearchValue } = useSearchMovie();

  const handleChange = (e) => setSearchValue(e.target.value);

  return (
    <div className="flex items-center w-auto h-10 pl-2 mr-2">
      <SearchIcon className="w-6 text-gray-600 dark:text-white" />
      <input
        className="w-24 sm:w-auto h-full pl-2 text-2xl focus:outline-none dark:bg-gray-800 text-black dark:text-white"
        placeholder="Search for movies"
        value={searchState.searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
