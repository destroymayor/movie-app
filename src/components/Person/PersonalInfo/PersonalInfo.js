import ProfileImage from '@/components/Person/PersonalInfo/ProfileImage';
import Details from '@/components/Person/PersonalInfo/Details';

const PersonalInfo = (props) => {
  const { data } = props;

  return (
    <>
      <ProfileImage url={data?.profile_path} />
      <Details data={data} />
    </>
  );
};

export default PersonalInfo;
