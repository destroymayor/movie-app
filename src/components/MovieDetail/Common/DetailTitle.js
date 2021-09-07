const DetailTitle = (props) => {
  const { title } = props;

  return (
    <h2 className="text-3xl mb-4">
      <span className="px-1 mr-4 bg-yellow-500"></span>
      <span className="text-gray-600 dark:text-white">{title}</span>
    </h2>
  );
};

export default DetailTitle;
