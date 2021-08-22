import router from 'next/router';

import { dataFields } from '@/constants/fields';
import DetailTitle from '@/components/MovieDetail/Common/DetailTitle';
import ProfileImage from '@/components/MovieDetail/TopCast/ProfileImage';

import Sliders from '@/components/Common/Sliders';

const TopCast = (props) => {
  const { data } = props;

  const handleNavigation = (id) => router.push(`/${dataFields.person.key}/${id}`);

  return (
    <section className="w-full px-5 xl:px-24">
      <DetailTitle title="Top Cast" />

      {data?.length === 0 || !data ? (
        <div className="py-5 text-black dark:text-white">No data</div>
      ) : (
        <Sliders data={data}>
          {({ item }) => (
            <div
              className="flex flex-col mx-2 my-3 transition duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105"
              onClick={() => handleNavigation(item?.id)}
            >
              <div className="w-40">
                <ProfileImage url={item.profile_path} alt={item?.original_name} />
              </div>
              <div className="p-2">
                <div className="font-semibold text-gray-800 dark:text-white">
                  {item?.original_name}
                </div>
                <div className="text-sm text-gray-800 dark:text-gray-300">as {item?.character}</div>
              </div>
            </div>
          )}
        </Sliders>
      )}
    </section>
  );
};

export default TopCast;
