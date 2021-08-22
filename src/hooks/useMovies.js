import { useEffect } from 'react';

import useSWR from 'swr';

import { useRecoilState } from 'recoil';
import { moviesDataState } from '@/store/movies';

const useMovies = (initialData) => {
  const [moviesData, setMoviesData] = useRecoilState(moviesDataState);

  const { data, error } = useSWR(moviesData.queryUrl, { initialData });

  useEffect(() => {
    setMoviesData((prevState) => ({
      ...prevState,
      isError: !!error,
      isLoading: !data,
    }));

    if (data) {
      setMoviesData((prevState) => ({
        ...prevState,
        page: data?.page,
        total_pages: data?.total_pages,
        total_results: data?.total_results,
        data: data?.results ?? [],
      }));
    }
  }, [data, error, setMoviesData]);

  return { data };
};

export default useMovies;
