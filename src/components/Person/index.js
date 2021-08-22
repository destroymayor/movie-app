import PersonalInfo from '@/components/Person/PersonalInfo/PersonalInfo';
import Summary from '@/components/Person/Summary/Summary';

const Person = (props) => {
  const { data, externalIdsData, imagesData, movieCreditsData } = props;

  return (
    <main className="grid grid-cols-5 p-10">
      <div className="flex flex-col">
        <PersonalInfo data={{ ...data, ...externalIdsData }} />
      </div>

      <div className="flex flex-col col-span-4 py-3 pl-5 text-black gap-y-2 dark:text-white">
        <Summary data={{ ...data, ...imagesData, ...movieCreditsData }} />
      </div>
    </main>
  );
};

export default Person;
