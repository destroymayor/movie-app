import Biography from '@/components/Person/Summary/Biography';
import KnownFor from '@/components/Person/Summary/KnownFor';
import Photos from '@/components/Person/Summary/Photos';

const Summary = (props) => {
  const { data } = props;

  return (
    <>
      <h1 className="text-3xl">{data?.name}</h1>
      <Biography data={data?.biography} />
      <Photos data={data} />
      <KnownFor data={data} />
    </>
  );
};

export default Summary;
