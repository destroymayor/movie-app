import useSearchMovie from '@/hooks/useSearchMovie';

const SearchBar = () => {
  const { searchValue, handleSearch } = useSearchMovie();

  const handleChange = (e) => handleSearch(e.target.value);

  return (
    <input
      className="w-auto h-10 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-md pl-2"
      placeholder="請輸入關鍵字"
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
