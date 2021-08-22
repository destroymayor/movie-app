import { MOVIE_DETAILS_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getMovies = async (params) => {
  const response = await fetcher(`${MOVIE_DETAILS_API}/${params}`);

  return response;
};

export default getMovies;
