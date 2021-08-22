import Header from '@/components/MovieDetail/Header/Header';
import Overview from '@/components/MovieDetail/Overview/Overview';
import Videos from '@/components/MovieDetail/Videos/Videos';
import TopCast from '@/components/MovieDetail/TopCast/TopCast';
import Backdrops from '@/components/MovieDetail/Backdrops/Backdrops';
import Reviews from '@/components/MovieDetail/Reviews/Reviews';
import Keywords from '@/components/MovieDetail/Keywords/Keywords';
import Recommendation from '@/components/MovieDetail/Recommendations/Recommendations';

const MovieDetail = (props) => {
  const {
    data,
    externalIdsData,
    imagesData,
    creditsData,
    videosData,
    keywordsData,
    reviewsData,
    recommendationsData,
    type,
  } = props;

  return (
    <main className="relative flex flex-wrap justify-center h-full gap-10 pb-10 dark:bg-gray-600">
      <Header data={{ ...data, ...externalIdsData }} type={type} />

      <Overview data={data} />
      <Videos data={videosData} />
      <TopCast data={creditsData} />
      <Backdrops data={imagesData} />
      <Keywords data={keywordsData} />
      <Reviews data={reviewsData} />
      <Recommendation data={recommendationsData} type={type} />
    </main>
  );
};

export default MovieDetail;
