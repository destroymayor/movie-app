export const ListSecondary = (props) => {
  const { loading, data = [], onClick } = props;

  const handleClick = (item) => {
    onClick(item);
  };

  if (loading)
    return (
      <div className="flex items-center h-10 px-2 m-2 text-black bg-gray-200 rounded-md shadow-lg w-52 animate-pulse"></div>
    );

  return (
    <ul className="flex flex-wrap gap-3 m-2">
      {data?.map((item, index) => (
        <li
          className="flex items-center p-2 text-black transition duration-200 ease-in-out rounded-md cursor-pointer dark:bg-gray-500 gap-x-2 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-black"
          key={`${item?.id} - ${item.name} - ${index}`}
          onClick={() => handleClick(item)}
        >
          {item?.origin_country && (
            <span className="px-1 text-gray-500 bg-gray-300 rounded-md ">
              {item?.origin_country}
            </span>
          )}

          <div className="font-semibold">{item.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default ListSecondary;
