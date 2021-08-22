import { useState, useEffect } from 'react';

import useWindowSize from '@/hooks/utils/useWindowSize';

const useSlidersToggle = ({ totalSize, itemWidth }) => {
  const windowSize = useWindowSize();
  const [active, setSliders] = useState({
    items: 0,
    index: 0,
  });

  const directionTypes = {
    previous: active.index - active.items,
    next: active.index + active.items,
  };

  const toggleSliders = (direction) => {
    setSliders((prevState) => ({
      ...prevState,
      index: directionTypes[direction],
    }));
  };

  useEffect(() => {
    setSliders({
      items: Math.floor(windowSize.width / itemWidth),
      index: 0,
    });
  }, [windowSize.width, itemWidth]);

  const isPreviousEnd = active.index !== 0;
  const isNextEnd = totalSize > active.index + active.items;

  return { activeIndex: active.index, isPreviousEnd, isNextEnd, toggleSliders };
};

export default useSlidersToggle;
