import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';
import List from '@/components/MovieDetail/Recommendations/List';

const Recommendations = (props) => {
  const { data, type } = props;

  if (!data) return null;

  return (
    <section className="w-full px-5 xl:px-24">
      <DetailTitle title="Recommendation Movies" />

      {data?.length === 0 ? (
        <div className="py-5 text-black dark:text-white">No any movies</div>
      ) : (
        <List data={data} type={type} />
      )}
    </section>
  );
};

export default Recommendations;
