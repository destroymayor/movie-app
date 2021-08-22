const List = (props) => {
  const { data } = props;

  return (
    <ul className="flex flex-wrap">
      {data?.map((item) => (
        <li
          key={item.id}
          className="px-3 py-2 m-1 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-500 dark:text-white"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
