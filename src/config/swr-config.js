import { SWRConfig } from 'swr';
import { fetcher } from '@/config/fetcher';

const SWR = (props) => {
  const { children } = props;

  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWR;
