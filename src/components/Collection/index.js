import Header from '@/components/Collection/Header/Header';
import Overview from '@/components/Collection/Overview/Overview';
import Movies from '@/components/Collection/Movies/Movies';

const Collection = (props) => {
  const { data } = props;

  return (
    <main className="relative flex flex-wrap justify-center h-full gap-10 pb-10 dark:bg-gray-600">
      <Header data={data} />
      <Overview data={data} />
      <Movies data={data} />
    </main>
  );
};

export default Collection;
