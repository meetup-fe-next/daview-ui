'use client';

import { useState, useEffect, Suspense } from 'react';
import { debounce } from 'lodash-es';

import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchResultsLoading from './SearchResults/SearchResult.loading';

const DEBOUCE_TIME = 500;

const SearchAutoComplete = () => {
  /** local state */
  const [value, setValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);

  const handleSearch = async (search: string) => {
    /**
     * debounce 처리 된 value를 가지고 API 요청을 보냅니다
     */
    setIsDebouncing(false);
    setDebouncedValue(search);
  };

  useEffect(() => {
    if (value === '') {
      setDebouncedValue('');
      setIsDebouncing(false);
    } else {
      const debouncedSendApiRequest = debounce(handleSearch, DEBOUCE_TIME);
      debouncedSendApiRequest(value);
      return () => debouncedSendApiRequest.cancel();
    }
  }, [value]);

  return (
    <div className="flex h-[calc(100vh-56px)] flex-col">
      <SearchInput value={value} setValue={setValue} setIsDebouncing={setIsDebouncing} />
      {isDebouncing ? (
        <SearchResultsLoading />
      ) : (
        <Suspense fallback={<SearchResultsLoading />}>
          <SearchResults value={debouncedValue} />
        </Suspense>
      )}
    </div>
  );
};

export default SearchAutoComplete;
