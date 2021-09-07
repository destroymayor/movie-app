import useSWR from 'swr';

import { FIND_MOVIE_BY_ID_API } from '@/api/api';

const useMovieDetails = (props) => {
  const { queryParams, id, fallbackData } = props;
  const url = `${FIND_MOVIE_BY_ID_API}/${id}/${queryParams}`;

  const { data, error } = useSWR(url, { fallbackData });

  const isError = !!error;
  const isLoading = !data && !error;

  return {
    data,
    isError,
    isLoading,
  };
};

export default useMovieDetails;
