import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

const useNProgress = () => {
  const router = useRouter();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== window.location.pathname) {
        window.routeTimeout = setTimeout(() => (window.location = url), 100);
      }

      NProgress.start();
    };

    const handleStop = () => {
      clearTimeout(window.routeTimeout);

      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
};

export default useNProgress;
