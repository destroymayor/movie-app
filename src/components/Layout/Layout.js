import Header from '@/components/Layout/Header/Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
