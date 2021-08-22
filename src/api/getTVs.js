import { TV_DETAILS_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getTVs = async (params) => {
  const response = await fetcher(`${TV_DETAILS_API}/${params}`);

  return response;
};

export default getTVs;
