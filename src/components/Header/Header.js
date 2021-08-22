import Link from 'next/link';
import { useRouter } from 'next/router';

import useSearchMovie from '@/hooks/useSearchMovie';

import Navigation from '@/components/Header/Navigation/Navigation';

const Header = () => {
  const router = useRouter();
  const { searchState } = useSearchMovie();

  const title = router.pathname === '/' ? 'Movie App' : searchState.discover.title;

  return (
    <header className="sticky top-0 z-20 w-full flex justify-between items-center bg-white shadow-md p-5">
      <div className="flex flex-col">
        <Link href="/" passHref>
          <h1 className="text-4xl cursor-pointer">{title}</h1>
        </Link>
        <div className="w-10 h-1.5 bg-yellow-500"></div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
