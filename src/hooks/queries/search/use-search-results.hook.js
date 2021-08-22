import { useEffect } from 'react';

import useSWRInfinite from 'swr/infinite';
import { useRecoilValue } from 'recoil';
import { moviesFilterState } from '@/context/movies/filter';
import { intersectionObserverState } from 'src/context/common/common';

import useDebounce from '@/hooks/utils/use-debounce.hook';

const useSearchResults = ({ api }) => {
  const moviesFilter = useRecoilValue(moviesFilterState);
  const searchValue = moviesFilter.searchValue;

  const intersectionObserver = useRecoilValue(intersectionObserverState);

  const debounceSearch = useDebounce(searchValue, 600);
  const url = debounceSearch ? `${api}?query=${debounceSearch}` : null;

  const { data, error, size, setSize } = useSWRInfinite((index) =>
    url ? `${url}&page=${index + 1}` : null
  );

  const isError = !!error;
  const isLoading = !data && !error && !!url;
  const isLoadingMore =
    (!data && !error && !!url) || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = data?.[data?.length - 1]?.results?.length < size;

  // process load more data
  useEffect(() => {
    if (!isLoading && !isLoadingMore && !isReachingEnd && intersectionObserver.isVisible) {
      setSize(size + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersectionObserver.isVisible, isReachingEnd]);

  return {
    data: data?.results ?? data?.map((item) => item?.results)?.flat(1),
    status: {
      isError,
      isLoading,
      isLoadingMore,
      isReachingEnd,
    },
  };
};

export default useSearchResults;
