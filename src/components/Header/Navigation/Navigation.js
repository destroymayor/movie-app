import { useRouter } from 'next/router';

import useSearchMovie from '@/hooks/useSearchMovie';
import { mode } from '@/constants/fields/fields';

import GithubLink from '@/components/Common/GithubLink';
import { SearchIcon } from '@heroicons/react/solid';

const Navigation = () => {
  const router = useRouter();
  const { setSearchMode } = useSearchMovie();

  const handleNavigation = (pathname) => {
    setSearchMode(mode.search);
    router.push(pathname);
  };

  return (
    <nav className="flex items-center gap-x-1">
      <div
        className="p-2 rounded-full transition duration-200 ease-in-out cursor-pointer hover:text-yellow-500 hover:bg-gray-100"
        onClick={() => handleNavigation('/search')}
      >
        <SearchIcon className="w-6 h-6" />
      </div>

      <GithubLink />
    </nav>
  );
};

export default Navigation;
