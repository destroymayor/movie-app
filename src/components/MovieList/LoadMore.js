import { useRecoilValue } from 'recoil';
import { moviesDataState } from '@/store/movies/movies';

import useOnScreen from '@/hooks/utils/useOnScreen';

import { ArrowDownIcon } from '@heroicons/react/outline';

const LoadMore = () => {
  const moviesData = useRecoilValue(moviesDataState);
  const { containerRef } = useOnScreen();

  const { isLoadingMore, isError, isReachingEnd } = moviesData;

  const label = isLoadingMore ? 'Loading...' : isReachingEnd ? 'No more movies' : ' Load more';

  if (isError) return <div />;

  return (
    <div ref={containerRef} className="flex items-center py-5">
      {!isReachingEnd && (
        <ArrowDownIcon className="w-7 h-7 animate-bounce text-gray-600 dark:text-white" />
      )}
      <span className="px-2 text-gray-600 dark:text-white">{label}</span>
    </div>
  );
};

export default LoadMore;
