import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';

const Overview = (props) => {
  const { data } = props;

  return (
    <div className="w-full px-5 xl:px-24">
      <DetailTitle title="OVERVIEW" />

      {data?.length === 0 && <div className="py-5 text-black dark:text-white">No overview</div>}

      <div className="text-lg leading-8 text-gray-700 dark:text-white">{data}</div>
    </div>
  );
};

export default Overview;
