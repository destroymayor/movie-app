import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';
import BackdropImage from '@/components/MovieDetail/Backdrops/BackdropImage';

import Sliders from '@/components/Common/Sliders';

const Backdrops = (props) => {
  const { data } = props;

  const getBackdropsData = data?.backdrops;

  if (!getBackdropsData) return null;

  return (
    <section className="w-full px-5 xl:px-24 group">
      <DetailTitle title="Backdrop Photos" />

      {getBackdropsData?.length === 0 ? (
        <div className="py-5 text-black dark:text-white">No any photos</div>
      ) : (
        <Sliders data={getBackdropsData}>
          {({ item }) => (
            <div key={item.file_path} className="flex-none max-w-sm mx-2 md:max-w-md lg:max-w-lg">
              <BackdropImage alt={item.file_path} src={item.file_path} />
            </div>
          )}
        </Sliders>
      )}
    </section>
  );
};

export default Backdrops;
