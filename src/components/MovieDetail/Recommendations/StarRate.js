const StarRate = (props) => {
  const { data } = props;

  return (
    <span className="absolute left-auto z-10 flex items-center justify-center h-8 text-white bg-yellow-500 rounded-full shadow-md -top-4 w-14">
      {data.toFixed(1)}
    </span>
  );
};

export default StarRate;
