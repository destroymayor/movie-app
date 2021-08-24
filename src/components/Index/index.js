import Header from '@/components/Header/Header';
import List from '@/components/List/List';

const Home = () => {
  return (
    <div className="dark:bg-gray-800 flex flex-col items-center">
      <Header />
      <List />
    </div>
  );
};

export default Home;
