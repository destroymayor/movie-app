import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';
import List from '@/components/MovieDetail/Keywords/List';

const Keywords = (props) => {
  const { data } = props;

  if (!data) return null;

  return (
    <section className="w-full px-5 xl:px-24">
      <DetailTitle title="Keywords" />

      {data?.length === 0 ? (
        <div className="py-5 text-black dark:text-white">No any keywords</div>
      ) : (
        <List data={data} />
      )}
    </section>
  );
};

export default Keywords;
