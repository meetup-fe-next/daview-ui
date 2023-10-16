'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';

import Subtitle from '@/components/Typography/Subtitle';
import { Search } from '@/components/Icons';

import { useGetLectures } from '@/hooks/queries/useLecture';
import { useGetCreators } from '@/hooks/queries/useCreator';

import SearchItemsContainer from '../SearchResultsContainer';

type Item = {
  name: string;
  id: number | string;
};

type SearchResultsProps = {
  value: string;
};

const SearchResults = ({ value }: SearchResultsProps) => {
  const router = useRouter();

  /** sever state */
  const { data: lecturesData } = useGetLectures(value, {
    enabled: !!value,
  });
  const { data: creatorsData } = useGetCreators(value, {
    enabled: !!value,
  });

  /** local state */
  const lectureItems = useMemo(
    () => (lecturesData?.items ? lecturesData.items.map(({ name, objectID }) => ({ name, id: objectID })) : []),
    [lecturesData],
  ) as Item[];
  const creatorItems = useMemo(
    () => (creatorsData?.items ? creatorsData.items.map(({ name, objectID }) => ({ name, id: objectID })) : []),
    [creatorsData],
  ) as Item[];

  const toalItems = [...lectureItems, ...creatorItems];

  /** handler */
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const searchValue = e.currentTarget.dataset.id || '';
    router.push(`/lectures?search=${searchValue}`);
  };

  return (
    <SearchItemsContainer>
      {toalItems.map(({ name, id }) => (
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
            {name.split(value).map((text, subIndex) => (
              <React.Fragment key={subIndex}>
                {subIndex > 0 && <mark className="text-primary-500 bg-transparent">{value}</mark>}
                {text}
              </React.Fragment>
            ))}
          </Subtitle>
        </li>
      ))}
    </SearchItemsContainer>
  );
};

export default SearchResults;
