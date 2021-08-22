import useOnScreen from '@/hooks/utils/use-on-screen.hook';

import { ArrowDownIcon } from '@heroicons/react/outline';

const LoadMore = (props) => {
  const { isLoadingMore, isError, isReachingEnd } = props;
  const { containerRef } = useOnScreen();

  const label = isLoadingMore ? 'Loading...' : isReachingEnd ? 'No more data' : null;

  if (isError) return <div />;

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-full py-5 bg-white dark:bg-gray-600"
    >
      {label && !isReachingEnd && (
        <ArrowDownIcon className="text-gray-600 w-7 h-7 animate-bounce dark:text-white" />
      )}
      <span className="px-2 text-gray-600 dark:text-white">{label}</span>
    </div>
  );
};

export default LoadMore;
