import Title from '@/components/Layout/Title/Title';
import Navigation from '@/components/Layout/Navigation/Navigation';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-5 bg-white shadow-md dark:bg-gray-800">
      <Title />
      <Navigation />
    </header>
  );
};

export default Header;
