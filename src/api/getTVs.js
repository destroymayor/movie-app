import { DISCOVER_TV_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getTVs = async (params) => {
  const response = await fetcher(`${DISCOVER_TV_API}/?${params}`);

  return response;
};

export default getTVs;
