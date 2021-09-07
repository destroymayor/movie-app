import { FIND_MOVIE_BY_ID_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getMovieImages = async (id) => {
  const response = await fetcher(`${FIND_MOVIE_BY_ID_API}/${id}/images?language=en`);

  return response;
};

export default getMovieImages;
