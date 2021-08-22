import { useState } from 'react';

const SegmentedControl = (props) => {
  const { components, width, height } = props;
  const [status, setStatus] = useState({ isActive: false, index: 0 });

  return (
    <ul className="flex items-center">
      <div
        className={`absolute transition duration-200 ease-in-out bg-gray-200 dark:bg-gray-500 rounded-full ${
          status.isActive ? 'opacity-1' : 'opacity-0'
        }`}
        style={{ width, height, transform: `translateX(${status.index * width}px)`, zIndex: '-1' }}
      />
      {components.map((item, index) => (
        <li
          key={`${index}`}
          className="flex items-center justify-center text-gray-800 transition duration-200 ease-in-out rounded-full cursor-pointer dark:text-white"
          style={{ width, height }}
          onMouseOver={() => setStatus({ isActive: true, index })}
          onMouseLeave={() => setStatus({ isActive: false, index })}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SegmentedControl;
