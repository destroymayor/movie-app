import { PERSON_DETAILS_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getPerson = async (id) => {
  const response = await fetcher(`${PERSON_DETAILS_API}/${id}`);

  return response;
};

export default getPerson;
