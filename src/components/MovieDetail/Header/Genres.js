const Genres = (props) => {
  const { data } = props;

  return (
    <ul className="flex flex-wrap divide-x divide-gray-300 ">
      {data?.map((item) => (
        <li className="px-3  my-1 text-gray-300 first:pl-0" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
