export const SkeletonItem = () => {
  return (
    <li className="flex flex-col m-5 rounded-md shadow-lg w-72 animate-pulse">
      <div className="h-96 dark:bg-gray-300 rounded-t-md"></div>
      <div className="flex justify-between p-2 bg-white flex-0 rounded-b-md dark:bg-gray-400">
        <div className="flex flex-col flex-wrap justify-center flex-1 pl-1 pr-2">
          <div className="h-6 my-1 text-lg truncate rounded-md dark:bg-gray-300"></div>
          <div className="w-32 h-6 my-1 text-gray-500 rounded-md dark:bg-gray-300"></div>
        </div>

        <div className="flex items-center justify-center pt-2 pb-2 mt-1 mb-1 rounded-md w-14 h-14 dark:bg-gray-300">
          <span className="text-gray-500"></span>
        </div>
      </div>
    </li>
  );
};

const CardSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center mt-5">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
};

export default CardSkeleton;
