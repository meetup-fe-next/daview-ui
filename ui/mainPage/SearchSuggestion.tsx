'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Headline from '@/components/Typography/Headline';

const SearchSuggestion = () => {
  const router = useRouter();

  const keywordList = [
    {
      text: '프론트엔드',
    },
    {
      text: '백엔드',
    },
    {
      text: '아키텍처',
    },
    {
      text: '드림코딩엘리',
    },
  ];

  return (
    <section className={'mt-7'}>
      <Headline type="h5">이런 검색어는 어떠세요?</Headline>
      <div className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-2">
        {keywordList.map(({ text }) => (
          <Button
            key={text}
            color="white"
            size="sm"
            onClick={() => {
              router.push(`/lectures?search=${text}`);
            }}
          >
            {text}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default SearchSuggestion;
