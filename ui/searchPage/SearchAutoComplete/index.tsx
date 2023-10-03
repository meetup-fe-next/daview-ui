'use client';

import { useState, useEffect } from 'react';
import { debounce } from 'lodash-es';

import { useGetLectures } from '@/hooks/queries/useLecture';
import { useGetCreators } from '@/hooks/queries/useCreator';

import SearchInput from '../SearchInput';
import SearchResults from '../SearchResults';
import SearchResultsContainer from '../SearchResultsContainer';
import SearchResultsLoading from '../SearchResults/SearchResult.loading';

const DEBOUCE_TIME = 1000;

const SearchAutoComplete = () => {
  /** 지역 state */
  const [value, setValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);

  /** sever state */
  const { data: lecturesData, isLoading: isLoadingLectures } = useGetLectures(debouncedValue, {
    enabled: !!debouncedValue,
  });
  const { data: creatorsData, isLoading: isLoadingCreators } = useGetCreators(debouncedValue, {
    enabled: !!debouncedValue,
  });

  const lectureItems = lecturesData?.items
    ? lecturesData.items.map(({ name, objectID }) => ({ name, id: objectID }))
    : [];
  const creatorItems = creatorsData?.items
    ? creatorsData.items.map(({ name, objectID }) => ({ name, id: objectID }))
    : [];

  // debounce 처리 된 value를 가지고 API 요청을 보냅니다.
  const handleSearch = async (search: string) => {
    setIsDebouncing(false);
    setDebouncedValue(search);
  };

  useEffect(() => {
    if (value === '') {
      setDebouncedValue('');
    } else {
      const debouncedSendApiRequest = debounce(handleSearch, DEBOUCE_TIME);
      debouncedSendApiRequest(value);
      return () => debouncedSendApiRequest.cancel();
    }
  }, [value]);

  console.log(isLoadingLectures, isLoadingCreators);

  return (
    <div className="flex h-[calc(100vh-56px)] flex-col">
      <SearchInput value={value} setValue={setValue} setIsDebouncing={setIsDebouncing} />
      <SearchResultsContainer>
        {(isLoadingLectures || isLoadingCreators || isDebouncing) && debouncedValue !== '' ? (
          <SearchResultsLoading />
        ) : (
          <>
            <SearchResults search={debouncedValue} results={lectureItems} setValue={setValue} />
            <SearchResults search={debouncedValue} results={creatorItems} setValue={setValue} />
          </>
        )}
      </SearchResultsContainer>
    </div>
  );
};
export default SearchAutoComplete;
