import Header from '@/components/Index/Header';
import Sliders from '@/components/Index/Sliders';

const Index = (props) => {
  const { data } = props;

  return (
    <main className="flex flex-col items-center">
      <ul className="flex flex-wrap justify-center mt-5">
        {data?.map((item) => (
          <li key={item.title} className="w-99-vw max-w-full mb-12">
            <Header data={item} />
            <Sliders data={item?.results} type={item?.type} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Index;
