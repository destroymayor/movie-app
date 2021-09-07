import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';
import Header from '@/components/MovieDetail/Reviews/Header';
import Content from '@/components/MovieDetail/Reviews/Content';

const Reviews = (props) => {
  const { data } = props;

  return (
    <div className="w-full px-5 xl:px-24">
      <DetailTitle title="REVIEWS" />

      {data?.length === 0 && <div className="py-5 text-black dark:text-white">No any reviews</div>}

      <ul>
        {data?.map((item) => (
          <li
            key={item.id}
            className="my-5 px-5 py-3 rounded-md bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-white"
          >
            <Header data={item} />
            <Content data={item.content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
