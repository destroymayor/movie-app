import useSWR from 'swr';
import { FIND_MOVIE_BY_API } from '@/api/api';

const useMovie = (id) => {
  const { data, error } = useSWR(id ? `${FIND_MOVIE_BY_API}/${id}` : null);

  return { data, loading: !data, error };
};

export default useMovie;
