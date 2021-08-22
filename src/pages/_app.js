import Head from 'next/head';

import { RecoilRoot } from 'recoil';

import SWRConfig from 'src/config/SWRConfig';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
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
