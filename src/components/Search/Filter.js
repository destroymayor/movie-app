import { useRouter } from 'next/router';

import { useRecoilValue } from 'recoil';
import { searchResultsFilterState } from 'src/context/movies/search';

export const Filter = () => {
  const router = useRouter();
  const searchResultsFilter = useRecoilValue(searchResultsFilterState);
  const sortData = searchResultsFilter?.data
    ?.slice()
    ?.sort((after, before) => before?.totalResults - after?.totalResults);

  const handleNavigation = (url) => router.push(url);

  return (
    <div className="sticky flex flex-col bg-gray-100 rounded-md shadow-lg top-24 dark:bg-gray-500 h-96">
      <div className="p-3 px-4 text-2xl text-white bg-blue-500 rounded-t-md">Search Results</div>
      <ul>
        {sortData?.map((item) => (
          <li
            className={`flex items-center justify-between px-5 py-3 text-gray-600 transition duration-200 ease-in-out cursor-pointer ${
              item.route === router.pathname ? `bg-gray-300` : ''
            } hover:bg-gray-300 group`}
            key={item?.label}
            onClick={() => handleNavigation(item.route)}
          >
            <span
              className={`dark:hover:text-gray-800 group-hover:text-gray-800 ${
                item.route === router.pathname ? `dark:text-gray-800` : 'dark:text-gray-100'
              }`}
            >
              {item?.label}
            </span>
            <span className="px-3 text-center bg-gray-200 rounded-md">{item?.totalResults}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
