import { useEffect } from 'react';

import useSWRInfinite from 'swr/infinite';
import useFilterQueryUrl from '@/hooks/useFilterQueryUrl';

import { useRecoilState, useRecoilValue } from 'recoil';
import { moviesDataState } from '@/store/movies/movies';
import { intersectionObserverState } from '@/store/common/common';

const useMovies = (fallbackData) => {
  const [, setMoviesData] = useRecoilState(moviesDataState);
  const intersectionObserver = useRecoilValue(intersectionObserverState);
  const { url } = useFilterQueryUrl();

  const { data, error, size, setSize } = useSWRInfinite((index) => `${url}&page=${index + 1}`, {
    fallbackData,
  });

  const isError = !!error;
  const isLoading = !data && !error;
  const isLoadingMore =
    (!data && !error) || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = data?.[data?.length - 1]?.results?.length < size;

  // process status
  useEffect(() => {
    setMoviesData((prevState) => ({
      ...prevState,
      isError,
      isLoading,
      isLoadingMore,
      isReachingEnd,
    }));
  }, [isError, isLoading, isLoadingMore, isReachingEnd, setMoviesData]);

  // process load more data
  useEffect(() => {
    if (!isLoading && !isLoadingMore && !isReachingEnd && intersectionObserver.isVisible) {
      setSize(size + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersectionObserver.isVisible, isReachingEnd]);

  // process data
  useEffect(() => {
    if (data) {
      setMoviesData((prevState) => ({
        ...prevState,
        data: data?.results ?? data?.map((item) => item?.results)?.flat(1),
      }));
    }
  }, [data, setMoviesData]);

  return { data };
};

export default useMovies;
