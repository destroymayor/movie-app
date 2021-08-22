import SocialLinks from '@/components/Common/SocialLinks';

const Details = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-col text-black gap-y-2 dark:text-white">
      <SocialLinks data={data} />
      <div className="text-2xl text-black dark:text-white">Personal Info</div>

      <div className="flex flex-col p-2 bg-gray-200 rounded-md dark:bg-gray-500">
        <span className="font-semibold">Known For</span>
        <span className="text-gray-600 dark:text-gray-300">{data?.known_for_department}</span>
      </div>
      <div className="flex flex-col p-2 bg-gray-200 rounded-md dark:bg-gray-500">
        <span className="font-semibold">Birthday</span>
        <span className="text-gray-600 dark:text-gray-300">{data?.birthday}</span>
      </div>
      <div className="flex flex-col p-2 bg-gray-200 rounded-md dark:bg-gray-500">
        <span className="font-semibold">Place of Birth</span>
        <span className="text-gray-600 dark:text-gray-300">{data?.place_of_birth}</span>
      </div>
      <div className="flex flex-col p-2 bg-gray-200 rounded-md dark:bg-gray-500">
        <span className="font-semibold">Also Known As</span>
        <ul className="flex flex-col gap-y-1">
          {data?.also_known_as?.slice(0, 5)?.map((item) => (
            <li className="text-gray-600 dark:text-gray-300" key={`${item}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
