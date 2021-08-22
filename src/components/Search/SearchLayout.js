import Filter from '@/components/Search/Filter';

export const SearchLayout = (props) => {
  const { children } = props;

  return (
    <div className="grid grid-cols-5 gap-2 p-5">
      <Filter />
      <div className="col-span-4 -mt-2">{children}</div>
    </div>
  );
};

export default SearchLayout;
