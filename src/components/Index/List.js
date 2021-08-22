import Sliders from '@/components/Common/Sliders';
import MovieCard from '@/components/MovieCard/MovieCard';

const List = (props) => {
  const { data, type } = props;

  if (!data) return <div />;

  return (
    <Sliders data={data}>
      {({ item }) => <MovieCard key={item.id} type={type} data={item} />}
    </Sliders>
  );
};

export default List;
