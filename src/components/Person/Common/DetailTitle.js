const DetailTitle = (props) => {
  const { title } = props;

  return (
    <h2 className="text-2xl">
      <span className="px-1 mr-2 bg-yellow-500"></span>
      <span className="text-gray-600 dark:text-white">{title}</span>
    </h2>
  );
};

export default DetailTitle;
