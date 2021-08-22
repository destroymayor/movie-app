import { COMPANY_DETAILS_API } from '@/api/api';
import { fetcher } from '@/config/fetcher';

const getCompany = async (id) => {
  const response = await fetcher(`${COMPANY_DETAILS_API}/${id}`);

  return response;
};

export default getCompany;
