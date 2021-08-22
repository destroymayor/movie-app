import useSWR from 'swr';

const useMovies = (props) => {
  const { queryPath, queryParams, fallbackData } = props;

  const params = queryParams ? `?${queryParams}` : '';
  const url = `${queryPath}${params}`;

  const { data, error } = useSWR(url, { fallbackData });

  const isError = !!error;
  const isLoading = !data && !error;

  return {
    data,
    isError,
    isLoading,
  };
};

export default useMovies;
