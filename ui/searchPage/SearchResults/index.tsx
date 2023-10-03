'use client';

import { useRouter } from 'next/navigation';

import Subtitle from '@/components/Typography/Subtitle';
import { Search } from '@/components/Icons';

export type Result = {
  name: string;
  id: number | string;
};

type SearchResultsProps = {
  search: string;
  results: Result[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchResults = ({ search, results, setValue }: SearchResultsProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const searchValue = e.currentTarget.dataset.id || '';

    setValue(searchValue);
    router.push(`/lectures?search=${searchValue}`);
  };

  return (
    <>
      {results.map(({ name, id }) => (
        <li
          data-id={name}
          key={id}
          className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-secondary-300"
          onClick={handleClick}
        >
          <span className="rounded-full bg-grey-900 p-2">
            <Search color="white" />
          </span>
          <Subtitle type="sub2" color="secondary-900">
            {name}
          </Subtitle>
        </li>
      ))}
    </>
  );
};

export default SearchResults;
