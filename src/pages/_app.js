import Head from 'next/head';
import '@/styles/globals.css';

import { RecoilRoot } from 'recoil';
import SWRConfig from '@/config/swr-config';

import useNProgress from '@/hooks/utils/useNProgress';

function MyApp({ Component, pageProps }) {
  useNProgress();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <RecoilRoot>
        <SWRConfig>{getLayout(<Component {...pageProps} />)}</SWRConfig>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
