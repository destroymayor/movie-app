import { TV_DETAILS_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getTV = async (id) => {
  const response = await fetcher(`${TV_DETAILS_API}/${id}`);

  return response;
};

export default getTV;
