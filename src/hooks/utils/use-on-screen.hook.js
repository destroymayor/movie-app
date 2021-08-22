import { useEffect, useRef } from 'react';

import { useRecoilState } from 'recoil';
import { intersectionObserverState } from 'src/context/common/common';

const useOnScreen = (options) => {
  const containerRef = useRef();
  const [intersectionState, setIntersectionState] = useRecoilState(intersectionObserverState);

  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setIntersectionState((prevState) => ({ ...prevState, isVisible: entry.isIntersecting }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);

    if (containerRef.current) observer.observe(containerRef?.current);

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [containerRef, options]);

  return { isVisible: intersectionState.isVisible, containerRef };
};

export default useOnScreen;
