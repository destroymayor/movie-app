import { FIND_MOVIE_BY_ID_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getMovie = async (id) => {
  const response = await fetcher(`${FIND_MOVIE_BY_ID_API}/${id}`);

  return response;
};

export default getMovie;
