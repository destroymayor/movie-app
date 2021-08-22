import HEAD from 'next/head';

import getCollection from '@/api/getCollection';
import { dataFields } from '@/constants/fields';

import useMovieDetails from '@/hooks/queries/use-movie-details.hook';

import Layout from '@/components/Layout/Layout';
import Collection from '@/components/Collection';

export default function CollectionPage(props) {
  const { id, data } = props;

  const queryType = dataFields.collection.key;
  const { data: collectionImagesData } = useMovieDetails({
    queryType,
    queryParams: 'images?language=en',
    id,
  });

  console.log(data);

  return (
    <>
      <HEAD>
        <title>{data?.name}</title>
      </HEAD>
      <Collection data={data} />
    </>
  );
}

CollectionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const data = await getCollection(id);

  return {
    props: { id, data },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
