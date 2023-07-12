'use client';

import Button from '@/components/Button';
import Headline from '@/components/Typography/Headline';

const SearchSuggestion = () => {
  return (
    <section className={'mt-7'}>
      <Headline type="h5">이런 검색어는 어떠세요?</Headline>
      <div className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-2">
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
        <Button color="white" size="sm">
          드림코드엘리
        </Button>
      </div>
    </section>
  );
};

export default SearchSuggestion;
