import useToggle from '@/hooks/utils/use-toggle.hook';

const Content = (props) => {
  const { data } = props;
  const [isOn, toggleIsOn] = useToggle(false);

  const maxLimit = 500;

  const getContent = data?.slice(0, maxLimit);
  const getMoreContent = data?.slice(maxLimit, data?.length);

  const handleReadMore = () => toggleIsOn(!isOn);

  return (
    <>
      <div className="break-words">
        <span>{getContent}</span>
        <span className="px-1">{data?.length >= maxLimit && !isOn && '....'}</span>
        {isOn && <span>{getMoreContent}</span>}
      </div>

      {data?.length > maxLimit && (
        <div
          className="py-2 text-gray-600 cursor-pointer dark:text-gray-300 hover:underline"
          onClick={handleReadMore}
        >
          {isOn ? 'Show less' : 'Read more'}
        </div>
      )}
    </>
  );
};

export default Content;
