import { DISCOVER_MOVIE_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getMovies = async (params) => {
  const response = await fetcher(`${DISCOVER_MOVIE_API}/?${params}`);

  return response;
};

export default getMovies;
