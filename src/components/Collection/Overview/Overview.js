import DetailTitle from '@/components/Collection/Common/DetailTitle';

const Overview = (props) => {
  const { data } = props;

  return (
    <section className="w-full px-5 xl:px-24">
      <DetailTitle title="Overview" />

      {data?.length === 0 && <div className="py-5 text-black dark:text-white">No overview</div>}

      <div className="text-lg leading-8 text-gray-700 dark:text-white">{data?.overview}</div>
    </section>
  );
};

export default Overview;
