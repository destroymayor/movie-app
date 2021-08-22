import { useRecoilValue } from 'recoil';
import { moviesDataState } from '@/store/movies/movies';

import useOnScreen from '@/hooks/utils/useOnScreen';

import { ArrowDownIcon } from '@heroicons/react/outline';

const LoadMore = () => {
  const moviesData = useRecoilValue(moviesDataState);
  const { containerRef } = useOnScreen();

  const { isLoadingMore, isError, isReachingEnd } = moviesData;

  const label = isLoadingMore ? 'loading...' : isReachingEnd ? 'no more movies' : ' load more';

  if (isError) return <div />;

  return (
    <div ref={containerRef} className="flex items-center py-5">
      {!isReachingEnd && <ArrowDownIcon className="w-7 h-7 text-gray-600 animate-bounce" />}
      <span className="px-2">{label}</span>
    </div>
  );
};

export default LoadMore;
