const SkeletonItem = () => {
  return (
    <li className="w-72 flex flex-col animate-pulse rounded-md m-5 shadow-lg">
      <div className="h-96 dark:bg-gray-300 rounded-t-md"></div>
      <div className="flex-0 flex justify-between p-2 rounded-b-md bg-white dark:bg-gray-400">
        <div className="flex-1 flex flex-col flex-wrap justify-center pl-1 pr-2">
          <div className="h-6 rounded-md text-lg truncate dark:bg-gray-300 my-1"></div>
          <div className="w-32 h-6 rounded-md dark:bg-gray-300 text-gray-500 my-1"></div>
        </div>

        <div className="w-14 h-14 flex justify-center items-center dark:bg-gray-300 pt-2 pb-2 mt-1 mb-1 rounded-md">
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
