import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';

const Keywords = (props) => {
  const { data } = props;

  return (
    <div className="w-full px-5 xl:px-24">
      <DetailTitle title="KEYWORDS" />

      {data?.length === 0 && <div className="py-5 text-black dark:text-white">No any keywords</div>}

      <ul className="flex flex-wrap">
        {data?.map((item) => (
          <li
            key={item.id}
            className="m-1 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-white"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
