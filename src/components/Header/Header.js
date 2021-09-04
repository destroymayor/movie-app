import Title from '@/components/Header/Title';
import Navigation from '@/components/Header/Navigation/Navigation';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full flex justify-between items-center bg-white dark:bg-gray-800 shadow-md p-5">
      <Title />
      <Navigation />
    </header>
  );
};

export default Header;
