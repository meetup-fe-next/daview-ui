import SearchItemsContainer from '../SearchResultsContainer';

const SearchResultsLoading = () => {
  return (
    <SearchItemsContainer>
      <li className="flex items-center gap-2 rounded-lg px-4 py-2">
        <span className="h-[40px] w-[40px] rounded-full bg-grey-100" />
        <span className="h-[24px] w-[200px] rounded-lg bg-grey-100" />
      </li>
      <li className="flex items-center gap-2 rounded-lg px-4 py-2">
        <span className="h-[40px] w-[40px] rounded-full bg-grey-100" />
        <span className="h-[24px] w-[200px] rounded-lg bg-grey-100" />
      </li>
      <li className="flex items-center gap-2 rounded-lg px-4 py-2">
        <span className="h-[40px] w-[40px] rounded-full bg-grey-100" />
        <span className="h-[24px] w-[200px] rounded-lg bg-grey-100" />
      </li>
    </SearchItemsContainer>
  );
};

export default SearchResultsLoading;
