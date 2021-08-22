import Header from '@/components/Header/Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="bg-white dark:bg-gray-600">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
