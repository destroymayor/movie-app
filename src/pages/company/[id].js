import HEAD from 'next/head';

import getCompany from '@/api/getCompany';
import { dataFields } from '@/constants/fields';

import useMovieDetails from '@/hooks/queries/use-movie-details.hook';

import Layout from '@/components/Layout/Layout';

export default function CompanyPage(props) {
  const { id, data } = props;

  const queryType = dataFields.company.key;

  console.log(data);

  return (
    <>
      <HEAD>
        <title>{data?.name}</title>
      </HEAD>
    </>
  );
}

CompanyPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  const id = params?.id;
  const data = await getCompany(id);

  return {
    props: { id, data },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}
