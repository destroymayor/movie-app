import { useState, useEffect, useRef } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Sliders = (props) => {
  const { children, data = [] } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const containerRef = useRef(0);
  const itemRef = useRef(null);

  const toggleSliders = (direction) => {
    const directionTypes = {
      previous: activeIndex - activeItem,
      next: activeIndex + activeItem,
    };

    setActiveIndex(directionTypes[direction]);
  };

  const handleToggle = (direction) => toggleSliders(direction);

  useEffect(() => {
    if (containerRef.current) {
      setActiveIndex(0);
      setActiveItem(
        Math.floor(
          containerRef?.current?.getBoundingClientRect()?.width /
            itemRef?.current?.getBoundingClientRect()?.width
        )
      );
    }
  }, [itemRef, containerRef]);

  const isPreviousEnd = activeIndex !== 0;
  const isNextEnd = data?.length > activeIndex + activeItem;

  return (
    <div ref={containerRef} className="relative flex items-center group">
      <div className="relative overflow-x-scroll sm:overflow-hidden">
        <ul
          className="relative top-0 flex transition-all duration-300 ease-in"
          style={{
            transform: `translateX(calc(-${
              itemRef?.current?.getBoundingClientRect()?.width
            }px * ${activeIndex}))`,
          }}
        >
          {data?.map((item, index) => (
            <li ref={itemRef} key={`${index}`}>
              {children({ item })}
            </li>
          ))}
        </ul>
      </div>

      {isPreviousEnd && (
        <button
          className="absolute left-0 z-10 invisible hidden px-1 py-3 text-gray-200 transition duration-200 ease-in-out bg-gray-500 border border-gray-200 rounded-md bg-opacity-60 sm:block group-hover:visible"
          onClick={() => handleToggle('previous')}
        >
          <ChevronLeftIcon className="w-6 h-6 transition duration-200 ease-in-out hover:text-yellow-500" />
        </button>
      )}

      {isNextEnd && (
        <button
          className="absolute right-0 z-10 invisible hidden px-1 py-3 text-gray-200 transition duration-200 ease-in-out bg-gray-500 border border-gray-200 rounded-md bg-opacity-60 sm:block group-hover:visible"
          onClick={() => handleToggle('next')}
        >
          <ChevronRightIcon className="w-6 h-6 transition duration-200 ease-in-out hover:text-yellow-500" />
        </button>
      )}
    </div>
  );
};

export default Sliders;
