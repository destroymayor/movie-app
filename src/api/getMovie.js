import { FIND_MOVIE_BY_API } from '@/api/api';
import { fetcher } from '@/api/index';

const getMovie = async (id) => {
  const response = await fetcher(`${FIND_MOVIE_BY_API}/${id}`);

  return response;
};

export default getMovie;
