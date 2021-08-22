import { SWRConfig } from 'swr';

import { fetcher } from '@/api/index';

const SWR = (props) => {
  const { children } = props;

  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default SWR;
