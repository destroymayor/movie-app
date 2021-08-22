import Link from 'next/link';

import routes from '@/constants/routes';
import SearchBar from '@/components/Layout/Title/SearchBar';
import { HomeIcon } from '@heroicons/react/outline';

const Title = () => {
  return (
    <div className="flex items-center">
      <Link href={routes.index} passHref>
        <h1 className="text-4xl text-gray-800 transition duration-200 ease-in-out cursor-pointer dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500">
          <HomeIcon className="w-8 h-8" />
        </h1>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Title;
