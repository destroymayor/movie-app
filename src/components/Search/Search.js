import GithubLink from '@/components/Common/GithubLink';

import MovieList from '@/components/MovieList/MovieList';
import LoadMore from '@/components/LoadMore/LoadMore';
import SearchBar from '@/components/Search/SearchBar';

const Search = () => {
  return (
    <>
      <header className="sticky top-0 w-full flex justify-between items-center bg-white shadow-md p-5 z-10">
        <SearchBar />
        <GithubLink />
      </header>
      <div className="flex flex-col items-center">
        <MovieList />
        <LoadMore />
      </div>
    </>
  );
};

export default Search;
