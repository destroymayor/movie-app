import SearchBar from '@/components/SearchBar/SearchBar';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-blue-400 shadow-md p-5 ">
      <h1 className="dark:text-white text-4xl">Movie App</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
