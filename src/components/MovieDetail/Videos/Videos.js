import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';

const Videos = (props) => {
  const { data } = props;

  const filterTrailerData = data && data.filter((item) => item.type === 'Trailer')?.[0];
  const name = filterTrailerData?.name;
  const src = `https://www.youtube.com/embed/${filterTrailerData?.key}`;

  if (!data) return null;

  return (
    <section className="w-full px-5 xl:px-24">
      <DetailTitle title="Videos" />

      {!filterTrailerData ? (
        <div className="py-5 text-black dark:text-white">No data</div>
      ) : (
        <iframe
          title={name}
          frameBorder="0"
          className="w-full px-2"
          style={{ height: 'calc(100vw - 450px)', maxHeight: 720, minHeight: 320 }}
          src={src}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      )}
    </section>
  );
};

export default Videos;
