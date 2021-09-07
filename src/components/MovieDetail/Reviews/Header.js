import formatDate from '@/utils/formatDate';

const Header = (props) => {
  const { data } = props;

  return (
    <div className="py-2">
      <span className="text-xl">{data.author}</span>
      <span className="px-4 text-gray-600 dark:text-gray-300 ">
        {formatDate(new Date(data?.updated_at))}
      </span>
    </div>
  );
};

export default Header;
