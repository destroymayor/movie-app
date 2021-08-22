import HEAD from 'next/head';

import getPerson from '@/api/getPerson';
import { dataFields } from '@/constants/fields';

import useMovieDetails from '@/hooks/queries/use-movie-details.hook';

import Layout from '@/components/Layout/Layout';
import Person from '@/components/Person';

export default function PersonPage(props) {
  const { id, data } = props;

  const queryType = dataFields.person.key;
  const { data: externalIdsData } = useMovieDetails({
    queryType,
    queryParams: 'external_ids',
    id,
  });
  const { data: imagesData } = useMovieDetails({
    queryType,
    queryParams: 'images?language=en',
    id,
  });
  const { data: movieCreditsData } = useMovieDetails({
    queryType,
    queryParams: 'movie_credits',
    id,
  });

  return (
    <>
      <HEAD>
        <title>{data?.name}</title>
      </HEAD>
      <Person
        data={data}
        externalIdsData={externalIdsData}
        imagesData={imagesData}
        movieCreditsData={movieCreditsData}
      />
    </>
  );
}

PersonPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const data = await getPerson(id);

  return {
    props: { id, data },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
