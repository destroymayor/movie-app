import { MOVIE_DETAILS_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getMovie = async (id) => {
  const response = await fetcher(`${MOVIE_DETAILS_API}/${id}`);

  return response;
};

export default getMovie;
