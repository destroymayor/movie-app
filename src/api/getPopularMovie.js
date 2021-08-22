import { POPULAR_MOVIE_API } from '@/api/api';
import { fetcher } from '@/api/index';

const getPopularMovie = async () => {
  const params = `sort_by=popularity.desc`;
  const response = await fetcher(`${POPULAR_MOVIE_API}?${params}`);

  return response;
};

export default getPopularMovie;
