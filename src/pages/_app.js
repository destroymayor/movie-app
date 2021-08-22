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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />

        <title>Movie App</title>
      </Head>
      <RecoilRoot>
        <SWRConfig>{getLayout(<Component {...pageProps} />)}</SWRConfig>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
