import router from 'next/router';

import useSearchMovie from '@/hooks/useSearchMovie';

import Sliders from '@/components/Index/Sliders';

const Index = (props) => {
  const { data } = props;
  const { setDiscoverMovies } = useSearchMovie();

  const handleMoreMovies = (item) => {
    const { title, type, params } = item;
    setDiscoverMovies({ title, type, params });

    router.push(`/discover`);
  };

  return (
    <main className="flex flex-col items-center">
      <ul className="flex flex-wrap justify-center mt-5">
        {data?.map((item) => (
          <li key={item.title} className="w-screen mb-12">
            <div className="flex justify-between items-center px-8 pt-2">
              <h2 className="px-5 text-2xl font-semibold text-black">{item?.title}</h2>
              <button
                className="font-semibold rounded-md p-2 text-yellow-500 transition duration-200 ease-in-out hover:text-yellow-600"
                onClick={() => handleMoreMovies(item)}
              >
                SEE MORE
              </button>
            </div>
            <Sliders data={item?.results} type={item?.type} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Index;
