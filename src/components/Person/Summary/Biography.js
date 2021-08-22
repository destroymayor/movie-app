import useToggle from '@/hooks/utils/use-toggle.hook';

import DetailTitle from '@/components/Person/Common/DetailTitle';

const Biography = (props) => {
  const { data } = props;
  const [isOn, toggleIsOn] = useToggle(false);

  const maxLimit = 1000;

  const getContent = data?.slice(0, maxLimit);
  const getMoreContent = data?.slice(maxLimit, data?.length);

  const handleReadMore = () => toggleIsOn(!isOn);

  return (
    <div className="flex flex-col pt-5 gap-y-2">
      <DetailTitle title="Biography" />

      <pre className="break-words whitespace-pre-wrap">
        <span>{getContent}</span>
        <span>{data?.length >= maxLimit && !isOn && ' ....'}</span>
        {isOn && <span>{getMoreContent}</span>}
        {data?.length > maxLimit && (
          <div
            className="py-2 text-blue-400 cursor-pointer dark:text-blue-400 hover:underline"
            onClick={handleReadMore}
          >
            {isOn ? 'Show less' : 'Read more'}
          </div>
        )}
      </pre>
    </div>
  );
};

export default Biography;
