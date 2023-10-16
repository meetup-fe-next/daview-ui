type SearchItemsContainerProps = {
  children: React.ReactNode;
};

const SearchItemsContainer = ({ children }: SearchItemsContainerProps) => {
  return <ul className="flex flex-1 flex-col overflow-y-auto py-2">{children}</ul>;
};

export default SearchItemsContainer;
