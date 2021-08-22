import { FIND_TV_BY_ID_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getTV = async (id) => {
  const response = await fetcher(`${FIND_TV_BY_ID_API}/${id}`);

  return response;
};

export default getTV;
