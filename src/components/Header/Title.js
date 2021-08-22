import Link from 'next/link';
import { useRouter } from 'next/router';
import useSearchMovie from '@/hooks/useSearchMovie';

import routes from '@/constants/routes';
import SearchBar from '@/components/SearchBar/SearchBar';

const Title = () => {
  const router = useRouter();
  const { searchState } = useSearchMovie();

  const title = router.pathname === routes.discover ? searchState.discover.title : 'Movie App';

  if (router.pathname === routes.search) return <SearchBar />;

  return (
    <div className="flex flex-col">
      <Link href={routes.index} passHref>
        <h1 className="text-4xl cursor-pointer text-gray-800 dark:text-white">{title}</h1>
      </Link>
      <div className="w-10 h-1.5 bg-yellow-500 dark:bg-yellow-500"></div>
    </div>
  );
};

export default Title;
