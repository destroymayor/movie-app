import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';
import Header from '@/components/MovieDetail/Reviews/Header';
import Content from '@/components/MovieDetail/Reviews/Content';

const Reviews = (props) => {
  const { data } = props;

  if (!data) return null;

  return (
    <section className="w-full px-5 xl:px-24">
      <DetailTitle title="Reviews" />

      {data?.length === 0 && <div className="py-5 text-black dark:text-white">No any reviews</div>}

      <ul>
        {data?.map((item) => (
          <li
            key={item.id}
            className="m-1 px-5 py-3 my-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-500 dark:text-white"
          >
            <Header data={item} />
            <Content data={item.content} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
