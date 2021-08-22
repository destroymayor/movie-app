import router from 'next/router';

import useSearchMovie from '@/hooks/useSearchMovie';
import routes from '@/constants/routes';

const Header = (props) => {
  const { data } = props;
  const { setDiscoverMovies } = useSearchMovie();

  const handleMoreMovies = () => {
    const { title, type, params } = data;
    setDiscoverMovies({ title, type, params });

    router.push(routes.discover);
  };

  const title = data?.title;

  return (
    <div className="flex justify-between items-center pt-2 md:px-8 ">
      <h2 className="px-5 text-2xl font-semibold text-black dark:text-white">{title}</h2>
      <button
        className="font-semibold rounded-md p-2 text-yellow-500 transition duration-200 ease-in-out hover:text-yellow-600"
        onClick={handleMoreMovies}
      >
        SEE MORE
      </button>
    </div>
  );
};

export default Header;
