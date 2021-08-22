import Header from '@/components/Index/Header';
import List from '@/components/Index/List';

const Index = (props) => {
  const { data } = props;

  return (
    <main className="flex flex-col items-center">
      <ul className="flex flex-wrap w-full mt-5">
        {data?.map((item) => (
          <li key={item.title} className="w-full px-3 mb-12">
            <Header data={item} />
            <List data={item?.results} type={item?.type} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Index;
