import { COLLECTION_DETAILS_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getCollection = async (id) => {
  const response = await fetcher(`${COLLECTION_DETAILS_API}/${id}`);

  return response;
};

export default getCollection;
