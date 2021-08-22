import SearchBar from '@/components/SearchBar/SearchBar';
import List from '@/components/List/List';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent">
      <header className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl ">Movie App</h1>
        <SearchBar />
      </header>

      <List />
    </div>
  );
};

export default Home;
