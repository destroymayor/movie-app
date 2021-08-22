import router from 'next/router';

import { dataFields } from '@/constants/fields';
import ListSecondary from '@/components/Search/Common/ListSecondary';
import LoadMore from '@/components/Common/LoadMore';

export const CompaniesSearch = (props) => {
  const { data = [], status } = props;

  const handleNavigation = (value) => router.push(`/${dataFields.company.key}/${value.id}`);

  return (
    <>
      <ListSecondary
        loading={status.isLoading}
        data={data}
        onClick={(value) => handleNavigation(value)}
      />
      <LoadMore
        isError={status.isError}
        isLoadingMore={status.isLoadingMore}
        isReachingEnd={status.isReachingEnd}
      />
    </>
  );
};

export default CompaniesSearch;
