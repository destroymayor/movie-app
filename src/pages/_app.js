import Head from 'next/head';
import '@/styles/nprogress.css';

import useNProgress from '@/hooks/utils/useNProgress';

import { RecoilRoot } from 'recoil';

import SWRConfig from 'src/config/SWRConfig';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  useNProgress();

  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <RecoilRoot>
        <SWRConfig>
          <Component {...pageProps} />
        </SWRConfig>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
